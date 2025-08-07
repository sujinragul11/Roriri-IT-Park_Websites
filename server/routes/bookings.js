const express = require('express');
const db = require('../database/init');
const { sendEmail } = require('../utils/email');

const router = express.Router();

// Create booking
router.post('/', async (req, res) => {
  const { type, referenceId, customerName, customerEmail, customerPhone, bookingDate, numberOfPeople, specialRequests, totalAmount } = req.body;

  if (!customerName || !customerEmail || !type) {
    return res.status(400).json({ error: 'Name, email, and type are required' });
  }

  db.run(
    `INSERT INTO bookings (type, reference_id, customer_name, customer_email, customer_phone, 
     booking_date, number_of_people, special_requests, total_amount)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [type, referenceId, customerName, customerEmail, customerPhone, bookingDate, numberOfPeople, specialRequests, totalAmount],
    async function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create booking' });
      }

      // Send confirmation email
      try {
        await sendEmail({
          to: customerEmail,
          subject: 'Booking Confirmation',
          text: `Thank you for your booking! Your booking ID is ${this.lastID}. We'll contact you soon with further details.`
        });
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }

      res.json({ message: 'Booking created successfully', bookingId: this.lastID });
    }
  );
});

// Get all bookings (admin only)
router.get('/', (req, res) => {
  db.all('SELECT * FROM bookings ORDER BY created_at DESC', (err, bookings) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(bookings);
  });
});

module.exports = router;