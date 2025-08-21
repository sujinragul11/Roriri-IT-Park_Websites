// server/middleware/auth.js
import jwt from 'jsonwebtoken';

/**
 * Middleware: Authenticate JWT Token
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Expect: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user; // user info from token
    next();
  });
};

/**
 * Middleware: Require authenticated user
 */
const requireAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
};

/**
 * Middleware: Require Admin role
 */
const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// ✅ Correct export for ES Modules
export { authenticateToken, requireAuth, requireAdmin };
