const express = require('express');
const db = require('../database/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  const { category, color, size, minPrice, maxPrice } = req.query;
  let query = 'SELECT * FROM products WHERE is_active = 1';
  const params = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }
  if (color) {
    query += ' AND color = ?';
    params.push(color);
  }
  if (size) {
    query += ' AND size = ?';
    params.push(size);
  }
  if (minPrice) {
    query += ' AND price >= ?';
    params.push(minPrice);
  }
  if (maxPrice) {
    query += ' AND price <= ?';
    params.push(maxPrice);
  }

  query += ' ORDER BY created_at DESC';

  db.all(query, params, (err, products) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(products);
  });
});

// Get single product
router.get('/:id', (req, res) => {
  db.get('SELECT * FROM products WHERE id = ? AND is_active = 1', [req.params.id], (err, product) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  });
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, (req, res) => {
  const { name, description, category, size, color, price, stockQuantity, imageUrls } = req.body;

  db.run(
    `INSERT INTO products (name, description, category, size, color, price, stock_quantity, image_urls)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [name, description, category, size, color, price, stockQuantity, JSON.stringify(imageUrls)],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create product' });
      }
      res.json({ message: 'Product created successfully', productId: this.lastID });
    }
  );
});

router.put('/:id', authenticateToken, requireAdmin, (req, res) => {
  const { name, description, category, size, color, price, stockQuantity, imageUrls } = req.body;

  db.run(
    `UPDATE products 
     SET name = ?, description = ?, category = ?, size = ?, color = ?, 
         price = ?, stock_quantity = ?, image_urls = ?
     WHERE id = ?`,
    [name, description, category, size, color, price, stockQuantity, JSON.stringify(imageUrls), req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to update product' });
      }
      res.json({ message: 'Product updated successfully' });
    }
  );
});

router.delete('/:id', authenticateToken, requireAdmin, (req, res) => {
  db.run('UPDATE products SET is_active = 0 WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete product' });
    }
    res.json({ message: 'Product deleted successfully' });
  });
});

module.exports = router;