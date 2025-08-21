import express from 'express';
import { prisma } from '../config/database.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import { sendEmail } from '../utils/email.js';

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      where: { isActive: true },
      include: {
        instructor: {
          select: {
            name: true,
            imageUrl: true,
            bio: true,
            experience: true
          }
        },
        _count: {
          select: {
            enrollments: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(courses);
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get single course
router.get('/:id', async (req, res) => {
  try {
    const course = await prisma.course.findFirst({
      where: { 
        id: req.params.id,
        isActive: true 
      },
      include: {
        instructor: {
          select: {
            name: true,
            bio: true,
            experience: true,
            imageUrl: true,
            expertise: true
          }
        },
        enrollments: {
          select: {
            id: true,
            studentName: true,
            createdAt: true
          },
          orderBy: { createdAt: 'desc' },
          take: 10
        }
      }
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// Enroll in course
router.post('/:id/enroll', async (req, res) => {
  const { studentName, studentEmail, studentPhone, preferredBatch } = req.body;
  const courseId = req.params.id;

  if (!studentName || !studentEmail) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Check if course exists
    const course = await prisma.course.findFirst({
      where: { 
        id: courseId,
        isActive: true 
      }
    });

    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    // Create enrollment
    const enrollment = await prisma.courseEnrollment.create({
      data: {
        courseId,
        studentName,
        studentEmail,
        studentPhone,
        preferredBatch
      }
    });

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
    res.json({ message: 'Enrollment successful', enrollmentId: enrollment.id });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ error: 'Failed to enroll in course' });
  }
});

// Admin routes
router.post('/', authenticateToken, requireAdmin, async (req, res) => {
  const { title, description, duration, price, instructorId, imageUrl, level, technologies } = req.body;

  if (!title || !description || !duration || !price) {
    return res.status(400).json({ error: 'Title, description, duration, and price are required' });
  }

  try {
    const course = await prisma.course.create({
      data: {
        title,
        description,
        duration,
        price: parseFloat(price),
        instructorId,
        imageUrl,
        level: level || 'BEGINNER',
        technologies
      }
    });

    res.status(201).json({ message: 'Course created successfully', courseId: course.id });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

router.put('/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { title, description, duration, price, instructorId, imageUrl, level, technologies } = req.body;

  try {
    const course = await prisma.course.update({
      where: { id: req.params.id },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(duration && { duration }),
        ...(price && { price: parseFloat(price) }),
        ...(instructorId && { instructorId }),
        ...(imageUrl && { imageUrl }),
        ...(level && { level }),
        ...(technologies && { technologies })
      }
    });

    res.json({ message: 'Course updated successfully', course });
  } catch (error) {
    console.error('Update course error:', error);
    res.status(500).json({ error: 'Failed to update course' });
  }
});

router.delete('/:id', authenticateToken, requireAdmin, async (req, res) => {
  try {
    await prisma.course.update({
      where: { id: req.params.id },
      data: { isActive: false }
    });

    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Delete course error:', error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
});

export default router;