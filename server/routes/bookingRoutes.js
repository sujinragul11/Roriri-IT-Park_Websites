import express from 'express';

const router = express.Router();

// Example booking route
router.get('/', (req, res) => {
  res.json({ message: 'Booking API working 🚀' });
});

export default router;
