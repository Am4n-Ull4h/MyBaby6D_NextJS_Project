import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); 
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // use TLS
        auth: {
          user: process.env.SMTP_MAIL, // Your Gmail address
          pass: process.env.SMTP_PASSWORD, // Your App Password
        },
      });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_MAIL, 
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to send email."}),
      { status: 500 }
    );
  }

}
