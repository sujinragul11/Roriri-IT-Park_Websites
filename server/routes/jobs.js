const express = require('express');
const db = require('../database/init');
const { authenticateToken, requireAdmin } = require('../middleware/auth');
const { sendEmail } = require('../utils/email');

const router = express.Router();

// Get all active jobs
router.get('/', (req, res) => {
  db.all('SELECT * FROM jobs WHERE is_active = 1 ORDER BY created_at DESC', (err, jobs) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(jobs);
  });
});

// Get single job
router.get('/:id', (req, res) => {
  db.get('SELECT * FROM jobs WHERE id = ? AND is_active = 1', [req.params.id], (err, job) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job);
  });
});

// Apply for job
router.post('/:id/apply', async (req, res) => {
  const { applicantName, applicantEmail, applicantPhone, resumeUrl, coverLetter } = req.body;
  const jobId = req.params.id;

  if (!applicantName || !applicantEmail) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  db.run(
    `INSERT INTO job_applications (job_id, applicant_name, applicant_email, applicant_phone, resume_url, cover_letter)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [jobId, applicantName, applicantEmail, applicantPhone, resumeUrl, coverLetter],
    async function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to submit application' });
      }

      // Send confirmation email
      try {
        await sendEmail({
          to: applicantEmail,
          subject: 'Job Application Received',
          text: `Thank you for applying! We've received your application and will review it soon.`
        });
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }

      res.json({ message: 'Application submitted successfully', applicationId: this.lastID });
    }
  );
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, (req, res) => {
  const { title, department, location, type, description, requirements, salaryRange } = req.body;

  db.run(
    `INSERT INTO jobs (title, department, location, type, description, requirements, salary_range)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, department, location, type, description, requirements, salaryRange],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create job' });
      }
      res.json({ message: 'Job created successfully', jobId: this.lastID });
    }
  );
});

router.put('/:id', authenticateToken, requireAdmin, (req, res) => {
  const { title, department, location, type, description, requirements, salaryRange } = req.body;

  db.run(
    `UPDATE jobs 
     SET title = ?, department = ?, location = ?, type = ?, description = ?, 
         requirements = ?, salary_range = ?
     WHERE id = ?`,
    [title, department, location, type, description, requirements, salaryRange, req.params.id],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to update job' });
      }
      res.json({ message: 'Job updated successfully' });
    }
  );
});

router.delete('/:id', authenticateToken, requireAdmin, (req, res) => {
  db.run('UPDATE jobs SET is_active = 0 WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete job' });
    }
    res.json({ message: 'Job deleted successfully' });
  });
});

module.exports = router;