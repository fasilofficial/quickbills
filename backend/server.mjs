import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch'; // ES module syntax
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware
app.use(bodyParser.json({ limit: '50mb' })); // Increase JSON body size limit to 50MB
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // For URL-encoded data


// Route to send emails
app.post('/send-email', async (req, res) => {
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
  
      res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});