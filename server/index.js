import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Configure dotenv
dotenv.config();

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import database connection
import { connectDatabase } from './config/database.js';

// Import routes
import authRoutes from './routes/auth.js';
import coursesRoutes from './routes/courses.js';
import productsRoutes from './routes/products.js';
import packagesRoutes from './routes/packages.js';
import bookingsRoutes from './routes/bookings.js';
import inquiriesRoutes from './routes/inquiries.js';
import galleryRoutes from './routes/gallery.js';
import jobsRoutes from './routes/jobs.js';
import adminRoutes from './routes/admin.js';
import instructorsRoutes from './routes/instructors.js';

// Import middleware
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to database
connectDatabase();

// Middleware
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/instructors', instructorsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/packages', packagesRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/inquiries', inquiriesRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    version: '1.0.0'
  });
});

// API documentation endpoint
app.get('/api/docs', (req, res) => {
  res.json({
    message: 'RoririItPark API Documentation',
    version: '1.0.0',
    endpoints: {
      auth: {
        'POST /api/auth/login': 'Login with username/email and password',
        'GET /api/auth/me': 'Get current user info (requires auth)',
        'PUT /api/auth/change-password': 'Change password (requires auth)'
      },
      admin: {
        'GET /api/admin/stats': 'Get dashboard statistics (admin only)',
        'GET /api/admin/export/:type': 'Export data as CSV (admin only)',
        'GET /api/admin/users': 'Get all users (admin only)',
        'POST /api/admin/users': 'Create user (admin only)',
        'PUT /api/admin/users/:id': 'Update user (admin only)',
        'DELETE /api/admin/users/:id': 'Delete user (admin only)'
      },
      courses: {
        'GET /api/courses': 'Get all courses',
        'GET /api/courses/:id': 'Get single course',
        'POST /api/courses/:id/enroll': 'Enroll in course',
        'POST /api/courses': 'Create course (admin only)',
        'PUT /api/courses/:id': 'Update course (admin only)',
        'DELETE /api/courses/:id': 'Delete course (admin only)'
      },
      products: {
        'GET /api/products': 'Get all products (with filters)',
        'GET /api/products/:id': 'Get single product',
        'POST /api/products': 'Create product (admin only)',
        'PUT /api/products/:id': 'Update product (admin only)',
        'DELETE /api/products/:id': 'Delete product (admin only)'
      },
      packages: {
        'GET /api/packages': 'Get all packages',
        'GET /api/packages/:id': 'Get single package',
        'POST /api/packages': 'Create package (admin only)',
        'PUT /api/packages/:id': 'Update package (admin only)',
        'DELETE /api/packages/:id': 'Delete package (admin only)'
      },
      bookings: {
        'POST /api/bookings': 'Create booking',
        'GET /api/bookings': 'Get all bookings (admin only)',
        'PUT /api/bookings/:id/status': 'Update booking status (admin only)'
      },
      inquiries: {
        'POST /api/inquiries': 'Submit inquiry',
        'GET /api/inquiries': 'Get all inquiries (admin only)',
        'PUT /api/inquiries/:id/status': 'Update inquiry status (admin only)'
      },
      jobs: {
        'GET /api/jobs': 'Get all jobs',
        'GET /api/jobs/:id': 'Get single job',
        'POST /api/jobs/:id/apply': 'Apply for job',
        'POST /api/jobs': 'Create job (admin only)',
        'PUT /api/jobs/:id': 'Update job (admin only)',
        'DELETE /api/jobs/:id': 'Delete job (admin only)',
        'GET /api/jobs/:id/applications': 'Get job applications (admin only)'
      },
      instructors: {
        'GET /api/instructors': 'Get all instructors',
        'GET /api/instructors/:id': 'Get single instructor',
        'POST /api/instructors': 'Create instructor (admin only)',
        'PUT /api/instructors/:id': 'Update instructor (admin only)',
        'DELETE /api/instructors/:id': 'Delete instructor (admin only)'
      },
      gallery: {
        'GET /api/gallery/:businessType': 'Get gallery by business type',
        'POST /api/gallery': 'Add gallery image (admin only)',
        'DELETE /api/gallery/:id': 'Delete gallery image (admin only)'
      }
    }
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler (must be last)
app.use('*', notFoundHandler);

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
});

export default app;