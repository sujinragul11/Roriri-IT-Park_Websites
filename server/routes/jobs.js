import express from 'express';
import { prisma } from '../config/database.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Get all active jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: {
            applications: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(jobs);
  } catch (error) {
    console.error('Get jobs error:', error);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// Get single job
router.get('/:id', async (req, res) => {
  try {
    const job = await prisma.job.findFirst({
      where: { 
        id: req.params.id,
        isActive: true 
      },
      include: {
        applications: {
          select: {
            id: true,
            applicantName: true,
            applicantEmail: true,
            status: true,
            createdAt: true
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    console.error('Get job error:', error);
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

// Apply for job
router.post('/:id/apply', async (req, res) => {
  const { applicantName, applicantEmail, applicantPhone, resumeUrl, coverLetter } = req.body;
  const jobId = req.params.id;

  if (!applicantName || !applicantEmail) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Check if job exists
    const job = await prisma.job.findFirst({
      where: { 
        id: jobId,
        isActive: true 
      }
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    const application = await prisma.jobApplication.create({
      data: {
        jobId,
        applicantName,
        applicantEmail,
        applicantPhone,
        resumeUrl,
        coverLetter
      }
    });

    // Send confirmation email
    try {
      await sendEmail({
        to: applicantEmail,
        subject: 'Job Application Received',
        text: `Thank you for applying for ${job.title}! We've received your application and will review it soon.`
      });
    } catch (emailErr) {
      console.error('Email error:', emailErr);
    }

    res.status(201).json({ message: 'Application submitted successfully', applicationId: application.id });
  } catch (error) {
    console.error('Job application error:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { title, department, location, type, description, requirements, salaryRange } = req.body;

  if (!title || !description || !requirements) {
    return res.status(400).json({ error: 'Title, description, and requirements are required' });
  }

  try {
    const job = await prisma.job.create({
      data: {
        title,
        department,
        location,
        type: type || 'FULL_TIME',
        description,
        requirements,
        salaryRange
      }
    });

    res.status(201).json({ message: 'Job created successfully', jobId: job.id });
  } catch (error) {
    console.error('Create job error:', error);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { title, department, location, type, description, requirements, salaryRange } = req.body;

  try {
    const job = await prisma.job.update({
      where: { id: req.params.id },
      data: {
        ...(title && { title }),
        ...(department && { department }),
        ...(location && { location }),
        ...(type && { type }),
        ...(description && { description }),
        ...(requirements && { requirements }),
        ...(salaryRange && { salaryRange })
      }
    });

    res.json({ message: 'Job updated successfully', job });
  } catch (error) {
    console.error('Update job error:', error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await prisma.job.update({
      where: { id: req.params.id },
      data: { isActive: false }
    });

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// Get job applications (admin only)
router.get('/:id/applications', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const applications = await prisma.jobApplication.findMany({
      where: { jobId: req.params.id },
      include: {
        job: {
          select: { title: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(applications);
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

export default router;