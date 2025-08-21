import express from 'express';
import { prisma } from '../config/database.js';
import { sendEmail } from '../utils/email.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Create inquiry
router.post('/', async (req, res) => {
  const { type, name, email, phone, subject, message } = req.body;

  if (!name || !email || !message || !type) {
    return res.status(400).json({ error: 'Name, email, message, and type are required' });
  }

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        type,
        name,
        email,
        phone,
        subject,
        message
      }
    });

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

    res.status(201).json({ message: 'Inquiry submitted successfully', inquiryId: inquiry.id });
  } catch (error) {
    console.error('Create inquiry error:', error);
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

// Get all inquiries (admin only)
router.get('/', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: 'desc' }
    });

    res.json(inquiries);
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

// Update inquiry status (admin only)
router.put('/:id/status', authenticateToken, requireAdmin, async (req, res) => {
  const { status } = req.body;
  
  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  try {
    const inquiry = await prisma.inquiry.update({
      where: { id: req.params.id },
      data: { status }
    });

    res.json({ message: 'Inquiry status updated successfully', inquiry });
  } catch (error) {
    console.error('Update inquiry status error:', error);
    res.status(500).json({ error: 'Failed to update inquiry status' });
  }
});

export default router;