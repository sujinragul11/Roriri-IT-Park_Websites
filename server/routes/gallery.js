const express = require('express');
const { prisma } = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get gallery images by business type
router.get('/:businessType', async (req, res) => {
  try {
    const images = await prisma.gallery.findMany({
      where: { businessType: req.params.businessType.toUpperCase() },
      orderBy: [
        { sortOrder: 'asc' },
        { createdAt: 'desc' }
      ]
    });

    res.json(images);
  } catch (error) {
    console.error('Get gallery error:', error);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { businessType, title, description, imageUrl, altText, sortOrder } = req.body;

  if (!businessType || !imageUrl) {
    return res.status(400).json({ error: 'Business type and image URL are required' });
  }

  try {
    const image = await prisma.gallery.create({
      data: {
        businessType: businessType.toUpperCase(),
        title,
        description,
        imageUrl,
        altText,
        sortOrder: sortOrder || 0
      }
    });

    res.status(201).json({ message: 'Image added successfully', imageId: image.id });
  } catch (error) {
    console.error('Add gallery image error:', error);
    res.status(500).json({ error: 'Failed to add image' });
  }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await prisma.gallery.delete({
      where: { id: req.params.id }
    });

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete gallery image error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

module.exports = router;