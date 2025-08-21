const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /api/enrollments - Create new enrollment
router.post('/', async (req, res) => {
  try {
    const { studentName, studentEmail, studentPhone, courseId } = req.body;

    // Validate required fields
    if (!studentName || !studentEmail || !courseId) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: studentName, studentEmail, and courseId are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(studentEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Check if course exists
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    // Check if student is already enrolled in this course
    const existingEnrollment = await prisma.courseEnrollment.findFirst({
      where: {
        studentEmail: studentEmail,
        courseId: courseId,
        status: {
          not: 'cancelled'
        }
      }
    });

    if (existingEnrollment) {
      return res.status(409).json({
        success: false,
        message: 'You are already enrolled in this course'
      });
    }

    // Create enrollment
    const enrollment = await prisma.courseEnrollment.create({
      data: {
        studentName,
        studentEmail,
        studentPhone: studentPhone || null,
        courseId,
        status: 'pending'
      },
      include: {
        course: {
          select: {
            title: true,
            duration: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      message: 'Enrollment created successfully',
      data: enrollment
    });

  } catch (error) {
    console.error('Error creating enrollment:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/enrollments - Get all enrollments (admin only)
router.get('/', async (req, res) => {
  try {
    const enrollments = await prisma.courseEnrollment.findMany({
      include: {
        course: {
          select: {
            title: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({
      success: true,
      data: enrollments
    });
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router;