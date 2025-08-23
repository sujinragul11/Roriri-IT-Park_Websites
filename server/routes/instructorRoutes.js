import express from 'express';
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Instructor routes working!' });
});

export default router;
