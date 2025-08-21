// controllers/enrollmentController.js
import { prisma } from '../config/database.js'; // Make sure prisma or your DB client is correctly set up

// Create a new enrollment
export const createEnrollment = async (req, res, next) => {
  try {
    const { studentName, studentEmail, studentPhone, courseId, status } = req.body;

    // Save enrollment to database
    const enrollment = await prisma.enrollment.create({
      data: {
        studentName,
        studentEmail,
        studentPhone,
        courseId,
        status,
      },
    });

    res.status(201).json({
      message: 'Enrollment created successfully',
      enrollment,
    });
  } catch (error) {
    console.error('Enrollment creation error:', error);
    next(error);
  }
};

// Optional: get all enrollments
export const getEnrollments = async (req, res, next) => {
  try {
    const enrollments = await prisma.enrollment.findMany();
    res.json(enrollments);
  } catch (error) {
    next(error);
  }
};
