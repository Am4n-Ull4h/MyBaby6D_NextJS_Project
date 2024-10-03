import { Readable } from 'stream'; // For raw body handling
import Stripe from 'stripe';
import * as admin from 'firebase-admin';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Initialize Firebase Admin
const serviceAccount = require('../../config/babygen-cc2ff-firebase-adminsdk-j5d96-4fea09bd9b.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL, // Your Firebase database URL
  });
}

const db = admin.database(); // Use admin.database() to get the database instance

// Function to get raw body from the request
async function getRawBody(req) {
  const buffer = await req.arrayBuffer(); // Get the raw body as an ArrayBuffer
  return Buffer.from(buffer); // Convert it to a Buffer
}

// Handle POST request for the webhook
export async function POST(req) {
  const buf = await getRawBody(req);
  const sig = req.headers.get('stripe-signature');

  let event;

  // Verify the event
  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret);
  } catch (err) {
    return new Response(`Webhook error: ${err.message}`, { status: 400 });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const amount = session.amount_total; // Amount in cents
    const uid = session.metadata.uid; // User ID from metadata

    if (!uid) {
      return new Response('UID not found', { status: 400 });
    }

    let creditsToAdd = 0;

    // Determine how many credits to add based on the amount
    if (amount === 1499) {
      creditsToAdd = 1;
    } else if (amount === 29999) {
      creditsToAdd = 10;
    }

    // Check if the session has already been processed (atomic check)
    const sessionRef = db.ref(`sessions/${session.id}`);

    // Use a transaction to check if session was processed and if not, process it atomically
    await sessionRef.transaction((currentData) => {
      if (currentData === null) {
        // If session doesn't exist, mark it as processed and proceed
        return { processed: true };
      }
      // If session already exists (was processed), abort the transaction
      return;
    }, async (error, committed, snapshot) => {
      if (error) {
        return new Response('Transaction failed', { status: 500 });
      }

      if (!committed) {
        // Session already processed
        return new Response('Session already processed', { status: 200 });
      }

      // Update credits in the database if the transaction was successful and session was not already processed
      if (creditsToAdd > 0) {
        const userRef = db.ref(`users/${uid}/credits`); // Use db.ref to get a reference to the user's credits
        await userRef.transaction((currentCredits) => {
          return (currentCredits || 0) + creditsToAdd; // Increment the current credits
        });
      }
    });
  }

  // Respond with a 200 status to acknowledge receipt of the event
  return new Response(JSON.stringify({ received: true }), { status: 200 });
}

// Handle other HTTP methods if needed (optional)
export async function GET(req) {
  return new Response('Method Not Allowed', { status: 405 });
}
