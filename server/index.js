// index.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Load env variables
dotenv.config();

// Import routes (check filenames match exactly in your routes folder)
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/UserRoutes.js';   // ✅ fixed typo
import orderRoutes from './routes/orderRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
import productRoutes from './routes/productRoutes.js';
import packageRoutes from './routes/packageRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import jobRoutes from './routes/jobRoutes.js';
import instructorRoutes from './routes/instructorRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';



// App init
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/products', productRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/gallery', galleryRoutes);

// Docs endpoint (example)
app.get('/api/docs', (req, res) => {
  res.json({
    message: 'API Documentation placeholder',
    routes: [
      '/api/health',
      '/api/auth/*',
      '/api/admin/*',
      '/api/orders/*',
      '/api/courses/*',
      '/api/products/*',
      '/api/packages/*',
      '/api/bookings/*',
      '/api/inquiries/*',
      '/api/jobs/*',
      '/api/instructors/*',
      '/api/gallery/*'
    ]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    availableRoutes: [
      '/api/health',
      '/api/docs',
      '/api/auth/*',
      '/api/admin/*',
      '/api/orders/*',
      '/api/courses/*',
      '/api/products/*',
      '/api/packages/*',
      '/api/bookings/*',
      '/api/inquiries/*',
      '/api/jobs/*',
      '/api/instructors/*',
      '/api/gallery/*'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
