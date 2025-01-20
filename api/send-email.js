// api/send-email.js

import fetch from 'node-fetch'; // Use node-fetch for serverless functions
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, message, attachment } = req.body;

    const emailData = {
      personalizations: [
        {
          to: [{ email: to }],
          subject,
        },
      ],
      from: { email: process.env.SENDGRID_FROM_EMAIL },
      content: [
        {
          type: 'text/plain',
          value: message,
        },
      ],
      attachments: [
        {
          content: attachment.split(",")[1], // Base64 content (remove the prefix)
          filename: "invoice.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    };

    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
