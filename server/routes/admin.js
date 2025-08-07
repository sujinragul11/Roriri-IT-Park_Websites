const express = require('express');
const db = require('../database/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');
const { Parser } = require('json2csv');

const router = express.Router();

// Dashboard statistics
router.get('/stats', authenticateToken, requireAdmin, (req, res) => {
  const stats = {};
  
  // Get total courses
  db.get('SELECT COUNT(*) as count FROM courses WHERE is_active = 1', (err, result) => {
    if (!err) stats.totalCourses = result.count;
    
    // Get total products
    db.get('SELECT COUNT(*) as count FROM products WHERE is_active = 1', (err, result) => {
      if (!err) stats.totalProducts = result.count;
      
      // Get total packages
      db.get('SELECT COUNT(*) as count FROM packages WHERE is_active = 1', (err, result) => {
        if (!err) stats.totalPackages = result.count;
        
        // Get total bookings
        db.get('SELECT COUNT(*) as count FROM bookings', (err, result) => {
          if (!err) stats.totalBookings = result.count;
          
          // Get total inquiries
          db.get('SELECT COUNT(*) as count FROM inquiries', (err, result) => {
            if (!err) stats.totalInquiries = result.count;
            
            // Get recent enrollments
            db.all(
              `SELECT ce.*, c.title as course_title 
               FROM course_enrollments ce 
               JOIN courses c ON ce.course_id = c.id 
               ORDER BY ce.created_at DESC LIMIT 5`,
              (err, enrollments) => {
                if (!err) stats.recentEnrollments = enrollments;
                
                res.json(stats);
              }
            );
          });
        });
      });
    });
  });
});

// Export data to CSV
router.get('/export/:type', authenticateToken, requireAdmin, (req, res) => {
  const { type } = req.params;
  let query = '';
  let filename = '';

  switch (type) {
    case 'bookings':
      query = 'SELECT * FROM bookings ORDER BY created_at DESC';
      filename = 'bookings.csv';
      break;
    case 'inquiries':
      query = 'SELECT * FROM inquiries ORDER BY created_at DESC';
      filename = 'inquiries.csv';
      break;
    case 'enrollments':
      query = `SELECT ce.*, c.title as course_title 
               FROM course_enrollments ce 
               JOIN courses c ON ce.course_id = c.id 
               ORDER BY ce.created_at DESC`;
      filename = 'course_enrollments.csv';
      break;
    case 'applications':
      query = `SELECT ja.*, j.title as job_title 
               FROM job_applications ja 
               JOIN jobs j ON ja.job_id = j.id 
               ORDER BY ja.created_at DESC`;
      filename = 'job_applications.csv';
      break;
    default:
      return res.status(400).json({ error: 'Invalid export type' });
  }

  db.all(query, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    try {
      const parser = new Parser();
      const csv = parser.parse(data);
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
      res.send(csv);
    } catch (parseErr) {
      res.status(500).json({ error: 'Failed to generate CSV' });
    }
  });
});

module.exports = router;