const express = require('express');
const db = require('../database/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get gallery images by business type
router.get('/:businessType', (req, res) => {
  db.all(
    'SELECT * FROM gallery WHERE business_type = ? ORDER BY sort_order ASC, created_at DESC',
    [req.params.businessType],
    (err, images) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(images);
    }
  );
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, (req, res) => {
  const { businessType, title, description, imageUrl, altText, sortOrder } = req.body;

  db.run(
    `INSERT INTO gallery (business_type, title, description, image_url, alt_text, sort_order)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [businessType, title, description, imageUrl, altText, sortOrder || 0],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to add image' });
      }
      res.json({ message: 'Image added successfully', imageId: this.lastID });
    }
  );
});

router.delete('/:id', authenticateToken, requireAdmin, (req, res) => {
  db.run('DELETE FROM gallery WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete image' });
    }
    res.json({ message: 'Image deleted successfully' });
  });
});

module.exports = router;