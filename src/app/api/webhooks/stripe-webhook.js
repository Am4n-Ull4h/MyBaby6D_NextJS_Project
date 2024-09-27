// /pages/api/webhooks/stripe-webhook.js

import { buffer } from "micro";
import Stripe from "stripe";
import { getDatabase, ref, update } from "firebase-admin/database";
import * as admin from "firebase-admin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const serviceAccount = require("../../config/babygen-cc2ff-firebase-adminsdk-j5d96-4fea09bd9b.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL // Include your database URL here
  });
}

const db = getDatabase();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const amount = session.amount_total / 100;  // Get the amount paid
    const uid = session.metadata.uid;  // Assume you pass the user ID as metadata

    let creditsToAdd = 0;

    if (amount === 14.99) {
      creditsToAdd = 1;
    } else if (amount === 299.99) {
      creditsToAdd = 10;
    }

    if (creditsToAdd > 0) {
      const userRef = ref(db, `users/${uid}/credits`);
      await update(userRef, {
        credits: admin.database.ServerValue.increment(creditsToAdd)
      });
    }
  }

  res.json({ received: true });
}
