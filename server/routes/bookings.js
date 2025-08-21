import express from 'express';
import { prisma } from '../config/database.js';
import { sendEmail } from '../utils/email.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Create booking
router.post('/', async (req, res) => {
  const { type, packageId, customerName, customerEmail, customerPhone, bookingDate, numberOfPeople, specialRequests, totalAmount } = req.body;

  if (!customerName || !customerEmail || !type) {
    return res.status(400).json({ error: 'Name, email, and type are required' });
  }

  try {
    const booking = await prisma.booking.create({
      data: {
        type,
        packageId,
        customerName,
        customerEmail,
        customerPhone,
        bookingDate: bookingDate ? new Date(bookingDate) : null,
        numberOfPeople: numberOfPeople ? parseInt(numberOfPeople) : null,
        specialRequests,
        totalAmount: totalAmount ? parseFloat(totalAmount) : null
      }
    });

    // Send confirmation email
    try {
      await sendEmail({
        to: customerEmail,
        subject: 'Booking Confirmation',
        text: `Thank you for your booking! Your booking ID is ${booking.id}. We'll contact you soon with further details.`
      });
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }

    res.status(201).json({ message: 'Booking created successfully', bookingId: booking.id });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Get all bookings (admin only)
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        package: {
          select: {
            name: true,
            price: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(bookings);
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// Update booking status (admin only)
router.put('/:id/status', authenticateToken, requireAdmin, async (req, res) => {
  const { status } = req.body;
  
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  try {
    const booking = await prisma.booking.update({
      where: { id: req.params.id },
      data: { status }
    });

    res.json({ message: 'Booking status updated successfully', booking });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ error: 'Failed to update booking status' });
  }
});

export default router;