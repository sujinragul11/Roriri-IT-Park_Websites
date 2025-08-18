const express = require('express');
const { prisma } = require('../config/database');
const { authenticateToken, requireAdmin } = require('../middleware/auth');
const { Parser } = require('json2csv');

const router = express.Router();

// Dashboard statistics
router.get('/stats', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const [
      totalCourses,
      totalProducts,
      totalPackages,
      totalBookings,
      totalInquiries,
      totalJobs,
      recentEnrollments
    ] = await Promise.all([
      prisma.course.count({ where: { isActive: true } }),
      prisma.product.count({ where: { isActive: true } }),
      prisma.package.count({ where: { isActive: true } }),
      prisma.booking.count(),
      prisma.inquiry.count(),
      prisma.job.count({ where: { isActive: true } }),
      prisma.courseEnrollment.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          course: {
            select: { title: true }
          }
        }
      })
    ]);

    const stats = {
      totalCourses,
      totalProducts,
      totalPackages,
      totalBookings,
      totalInquiries,
      totalJobs,
      recentEnrollments: recentEnrollments.map(enrollment => ({
        ...enrollment,
        course_title: enrollment.course?.title
      }))
    };

    res.json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to fetch statistics' });
  }
});

// Export data to CSV
router.get('/export/:type', authenticateToken, requireAdmin, async (req, res) => {
  const { type } = req.params;
  let filename = '';
  let data = [];

  try {
    switch (type) {
      case 'bookings':
        data = await prisma.booking.findMany({
          orderBy: { createdAt: 'desc' },
          include: {
            package: {
              select: { name: true }
            }
          }
        });
        filename = 'bookings.csv';
        break;
      case 'inquiries':
        data = await prisma.inquiry.findMany({
          orderBy: { createdAt: 'desc' }
        });
        filename = 'inquiries.csv';
        break;
      case 'enrollments':
        data = await prisma.courseEnrollment.findMany({
          orderBy: { createdAt: 'desc' },
          include: {
            course: {
              select: { title: true }
            }
          }
        });
        filename = 'course_enrollments.csv';
        break;
      case 'applications':
        data = await prisma.jobApplication.findMany({
          orderBy: { createdAt: 'desc' },
          include: {
            job: {
              select: { title: true }
            }
          }
        });
        filename = 'job_applications.csv';
        break;
      default:
        return res.status(400).json({ error: 'Invalid export type' });
    }

    // Flatten nested objects for CSV
    const flattenedData = data.map(item => {
      const flattened = { ...item };
      if (item.course) {
        flattened.course_title = item.course.title;
        delete flattened.course;
      }
      if (item.job) {
        flattened.job_title = item.job.title;
        delete flattened.job;
      }
      if (item.package) {
        flattened.package_name = item.package.name;
        delete flattened.package;
      }
      return flattened;
    });

    const parser = new Parser();
    const csv = parser.parse(flattenedData);
    
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.send(csv);
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ error: 'Failed to export data' });
  }
});

// Get all users (admin only)
router.get('/users', authenticateToken, requireAdmin, async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Create user (admin only)
router.post('/users', authenticateToken, requireAdmin, async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: role || 'STAFF'
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Create user error:', error);
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Username or email already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }
});

// Update user (admin only)
router.put('/users/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { username, email, role } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(username && { username }),
        ...(email && { email }),
        ...(role && { role })
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        updatedAt: true
      }
    });

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Update user error:', error);
    if (error.code === 'P2002') {
      res.status(400).json({ error: 'Username or email already exists' });
    } else {
      res.status(500).json({ error: 'Failed to update user' });
    }
  }
});

// Delete user (admin only)
router.delete('/users/:id', authenticateToken, requireAdmin, async (req, res) => {
  const { id } = req.params;

  if (id === req.user.id) {
    return res.status(400).json({ error: 'Cannot delete your own account' });
  }

  try {
    await prisma.user.delete({
      where: { id }
    });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

module.exports = router;