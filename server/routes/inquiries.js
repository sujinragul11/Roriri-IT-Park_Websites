const express = require('express');
const db = require('../database/init');
const { sendEmail } = require('../utils/email');

const router = express.Router();

// Create inquiry
router.post('/', async (req, res) => {
  const { type, name, email, phone, subject, message } = req.body;

  if (!name || !email || !message || !type) {
    return res.status(400).json({ error: 'Name, email, message, and type are required' });
  }

  db.run(
    `INSERT INTO inquiries (type, name, email, phone, subject, message)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [type, name, email, phone, subject, message],
    async function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit inquiry' });
      }

      // Send confirmation email
      try {
        await sendEmail({
          to: email,
          subject: 'Inquiry Received',
          text: `Thank you for your inquiry! We've received your message and will get back to you soon.`
        });
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }

      res.json({ message: 'Inquiry submitted successfully', inquiryId: this.lastID });
    }
  );
});

// Get all inquiries (admin only)
router.get('/', (req, res) => {
  db.all('SELECT * FROM inquiries ORDER BY created_at DESC', (err, inquiries) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(inquiries);
  });
});

module.exports = router;