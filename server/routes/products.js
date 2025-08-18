const express = require('express');
const { prisma } = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const { category, color, size, minPrice, maxPrice } = req.query;
  
  const where = { isActive: true };

  if (category) {
    where.category = category;
  }
  if (color) {
    where.color = color;
  }
  if (size) {
    where.size = size;
  }
  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice) where.price.gte = parseFloat(minPrice);
    if (maxPrice) where.price.lte = parseFloat(maxPrice);
  }

  try {
    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    res.json(products);
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findFirst({
      where: { 
        id: req.params.id,
        isActive: true 
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { name, description, category, size, color, price, stockQuantity, imageUrls } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ error: 'Name, description, and price are required' });
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        category: category || 'FLOOR',
        size,
        color,
        price: parseFloat(price),
        stockQuantity: parseInt(stockQuantity) || 0,
        imageUrls: imageUrls ? JSON.stringify(imageUrls) : null
      }
    });

    res.status(201).json({ message: 'Product created successfully', productId: product.id });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { name, description, category, size, color, price, stockQuantity, imageUrls } = req.body;

  try {
    const product = await prisma.product.update({
      where: { id: req.params.id },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(category && { category }),
        ...(size && { size }),
        ...(color && { color }),
        ...(price && { price: parseFloat(price) }),
        ...(stockQuantity !== undefined && { stockQuantity: parseInt(stockQuantity) }),
        ...(imageUrls && { imageUrls: JSON.stringify(imageUrls) })
      }
    });

    res.json({ message: 'Product updated successfully', product });
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await prisma.product.update({
      where: { id: req.params.id },
      data: { isActive: false }
    });

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;