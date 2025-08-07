const express = require('express');
const db = require('../database/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');
const { sendEmail } = require('../utils/email');

const router = express.Router();

// Get all courses
router.get('/', (req, res) => {
  db.all(
    `SELECT c.*, i.name as instructor_name, i.image_url as instructor_image
     FROM courses c 
     LEFT JOIN instructors i ON c.instructor_id = i.id 
     WHERE c.is_active = 1 
     ORDER BY c.created_at DESC`,
    (err, courses) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json(courses);
    }
  );
});

// Get single course
router.get('/:id', (req, res) => {
  db.get(
    `SELECT c.*, i.name as instructor_name, i.bio as instructor_bio, 
            i.experience as instructor_experience, i.image_url as instructor_image
     FROM courses c 
     LEFT JOIN instructors i ON c.instructor_id = i.id 
     WHERE c.id = ? AND c.is_active = 1`,
    [req.params.id],
    (err, course) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }
      res.json(course);
    }
  );
});

// Enroll in course
router.post('/:id/enroll', async (req, res) => {
  const { studentName, studentEmail, studentPhone, preferredBatch } = req.body;
  const courseId = req.params.id;

  if (!studentName || !studentEmail) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Check if course exists
  db.get('SELECT * FROM courses WHERE id = ? AND is_active = 1', [courseId], (err, course) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Insert enrollment
    db.run(
      `INSERT INTO course_enrollments (course_id, student_name, student_email, student_phone, preferred_batch)
       VALUES (?, ?, ?, ?, ?)`,
      [courseId, studentName, studentEmail, studentPhone, preferredBatch],
      async function(err) {
        if (err) {
          return res.status(500).json({ error: 'Failed to enroll' });
        }

        // Send confirmation email
        try {
          await sendEmail({
            to: studentEmail,
            subject: 'Course Enrollment Confirmation',
            text: `Thank you for enrolling in ${course.title}! We'll contact you soon with further details.`
          });
        } catch (emailErr) {
          console.error('Email error:', emailErr);
        }

        res.json({ message: 'Enrollment successful', enrollmentId: this.lastID });
      }
    );
  });
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, (req, res) => {
  const { title, description, duration, price, instructorId, imageUrl, level, technologies } = req.body;

  db.run(
    `INSERT INTO courses (title, description, duration, price, instructor_id, image_url, level, technologies)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [title, description, duration, price, instructorId, imageUrl, level, technologies],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create course' });
      }
      res.json({ message: 'Course created successfully', courseId: this.lastID });
    }
  );
});

router.put('/:id', authenticateToken, requireAdmin, (req, res) => {
  const { title, description, duration, price, instructorId, imageUrl, level, technologies } = req.body;

  db.run(
    `UPDATE courses 
     SET title = ?, description = ?, duration = ?, price = ?, instructor_id = ?, 
         image_url = ?, level = ?, technologies = ?
     WHERE id = ?`,
    [title, description, duration, price, instructorId, imageUrl, level, technologies, req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to update course' });
      }
      res.json({ message: 'Course updated successfully' });
    }
  );
});

router.delete('/:id', authenticateToken, requireAdmin, (req, res) => {
  db.run('UPDATE courses SET is_active = 0 WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete course' });
    }
    res.json({ message: 'Course deleted successfully' });
  });
});

module.exports = router;