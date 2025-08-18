const express = require('express');
const { prisma } = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all instructors
router.get('/', async (req, res) => {
  try {
    const instructors = await prisma.instructor.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: {
            courses: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(instructors);
  } catch (error) {
    console.error('Get instructors error:', error);
    res.status(500).json({ error: 'Failed to fetch instructors' });
  }
});

// Get single instructor
router.get('/:id', async (req, res) => {
  try {
    const instructor = await prisma.instructor.findFirst({
      where: { 
        id: req.params.id,
        isActive: true 
      },
      include: {
        courses: {
          where: { isActive: true },
          select: {
            id: true,
            title: true,
            description: true,
            price: true,
            imageUrl: true
          }
        }
      }
    });

    if (!instructor) {
      return res.status(404).json({ error: 'Instructor not found' });
    }

    res.json(instructor);
  } catch (error) {
    console.error('Get instructor error:', error);
    res.status(500).json({ error: 'Failed to fetch instructor' });
  }
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { name, bio, experience, expertise, imageUrl, linkedinUrl } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  try {
    const instructor = await prisma.instructor.create({
      data: {
        name,
        bio,
        experience,
        expertise,
        imageUrl,
        linkedinUrl
      }
    });

    res.status(201).json({ message: 'Instructor created successfully', instructorId: instructor.id });
  } catch (error) {
    console.error('Create instructor error:', error);
    res.status(500).json({ error: 'Failed to create instructor' });
  }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { name, bio, experience, expertise, imageUrl, linkedinUrl } = req.body;

  try {
    const instructor = await prisma.instructor.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(bio && { bio }),
        ...(experience && { experience }),
        ...(expertise && { expertise }),
        ...(imageUrl && { imageUrl }),
        ...(linkedinUrl && { linkedinUrl })
      }
    });

    res.json({ message: 'Instructor updated successfully', instructor });
  } catch (error) {
    console.error('Update instructor error:', error);
    res.status(500).json({ error: 'Failed to update instructor' });
  }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await prisma.instructor.update({
      where: { id: req.params.id },
      data: { isActive: false }
    });

    res.json({ message: 'Instructor deleted successfully' });
  } catch (error) {
    console.error('Delete instructor error:', error);
    res.status(500).json({ error: 'Failed to delete instructor' });
  }
});

module.exports = router;