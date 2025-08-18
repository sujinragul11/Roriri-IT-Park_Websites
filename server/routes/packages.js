const express = require('express');
const { prisma } = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all packages
router.get('/', async (req, res) => {
  try {
    const packages = await prisma.package.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: {
            bookings: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(packages);
  } catch (error) {
    console.error('Get packages error:', error);
    res.status(500).json({ error: 'Failed to fetch packages' });
  }
});

// Get single package
router.get('/:id', async (req, res) => {
  try {
    const packageData = await prisma.package.findFirst({
      where: { 
        id: req.params.id,
        isActive: true 
      },
      include: {
        bookings: {
          select: {
            id: true,
            customerName: true,
            bookingDate: true,
            status: true
          },
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    });

    if (!packageData) {
      return res.status(404).json({ error: 'Package not found' });
    }

    res.json(packageData);
  } catch (error) {
    console.error('Get package error:', error);
    res.status(500).json({ error: 'Failed to fetch package' });
  }
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { name, description, price, duration, includes, maxPeople, imageUrls } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Name, description, and price are required' });
  }

  try {
    const packageData = await prisma.package.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        duration,
        includes,
        maxPeople: maxPeople ? parseInt(maxPeople) : null,
        imageUrls: imageUrls ? JSON.stringify(imageUrls) : null
      }
    });

    res.status(201).json({ message: 'Package created successfully', packageId: packageData.id });
  } catch (error) {
    console.error('Create package error:', error);
    res.status(500).json({ error: 'Failed to create package' });
  }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { name, description, price, duration, includes, maxPeople, imageUrls } = req.body;

  try {
    const packageData = await prisma.package.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(price && { price: parseFloat(price) }),
        ...(duration && { duration }),
        ...(includes && { includes }),
        ...(maxPeople !== undefined && { maxPeople: parseInt(maxPeople) }),
        ...(imageUrls && { imageUrls: JSON.stringify(imageUrls) })
      }
    });

    res.json({ message: 'Package updated successfully', package: packageData });
  } catch (error) {
    console.error('Update package error:', error);
    res.status(500).json({ error: 'Failed to update package' });
  }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await prisma.package.update({
      where: { id: req.params.id },
      data: { isActive: false }
    });

    res.json({ message: 'Package deleted successfully' });
  } catch (error) {
    console.error('Delete package error:', error);
    res.status(500).json({ error: 'Failed to delete package' });
  }
});

module.exports = router;