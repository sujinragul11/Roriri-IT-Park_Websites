// server/index.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import routes
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import enrollmentRoutes from './routes/enrollmentRoutes.js';
import coursesRoutes from './routes/courses.js'; // Courses routes

// Import middleware
import { errorHandler, notFoundHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ----------------------
// Middleware
// ----------------------
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(cookieParser()); // Handle cookies
app.use(cors({ origin: true, credentials: true })); // Allow cross-origin requests
app.use(morgan('dev')); // Logging

// ----------------------
// Routes
// ----------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running 🚀' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/courses', coursesRoutes); // Courses routes

// ----------------------
// 404 Handler (must be after all routes)
// ----------------------
app.use(notFoundHandler);

// ----------------------
// Global Error Handler (last middleware)
// ----------------------
app.use(errorHandler);

// ----------------------
// Start Server
// ----------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
