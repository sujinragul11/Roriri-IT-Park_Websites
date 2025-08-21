// server/routes/courses.js
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/courses - Fetch all active courses
router.get('/', async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      where: { 
        isActive: true 
      },
      select: {
        id: true,
        title: true,
        description: true,
        duration: true,
        price: true,
        level: true,
        technologies: true,
        imageUrl: true,
        instructor: {
          select: {
            id: true,
            name: true,
            expertise: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json({
      success: true,
      data: courses
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/courses/:id - Get single course by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
            bio: true,
            expertise: true,
            imageUrl: true
          }
        }
      }
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    console.error('Error fetching course:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;