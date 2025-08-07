const express = require('express');
const db = require('../database/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all packages
router.get('/', (req, res) => {
  db.all('SELECT * FROM packages WHERE is_active = 1 ORDER BY created_at DESC', (err, packages) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(packages);
  });
});

// Get single package
router.get('/:id', (req, res) => {
  db.get('SELECT * FROM packages WHERE id = ? AND is_active = 1', [req.params.id], (err, package) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!package) {
      return res.status(404).json({ error: 'Package not found' });
    }
    res.json(package);
  });
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, (req, res) => {
  const { name, description, price, duration, includes, maxPeople, imageUrls } = req.body;

  db.run(
    `INSERT INTO packages (name, description, price, duration, includes, max_people, image_urls)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, description, price, duration, includes, maxPeople, JSON.stringify(imageUrls)],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create package' });
      }
      res.json({ message: 'Package created successfully', packageId: this.lastID });
    }
  );
});

router.put('/:id', authenticateToken, requireAdmin, (req, res) => {
  const { name, description, price, duration, includes, maxPeople, imageUrls } = req.body;

  db.run(
    `UPDATE packages 
     SET name = ?, description = ?, price = ?, duration = ?, includes = ?, 
         max_people = ?, image_urls = ?
     WHERE id = ?`,
    [name, description, price, duration, includes, maxPeople, JSON.stringify(imageUrls), req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to update package' });
      }
      res.json({ message: 'Package updated successfully' });
    }
  );
});

router.delete('/:id', authenticateToken, requireAdmin, (req, res) => {
  db.run('UPDATE packages SET is_active = 0 WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete package' });
    }
    res.json({ message: 'Package deleted successfully' });
  });
});

module.exports = router;