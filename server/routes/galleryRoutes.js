import express from 'express';
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Gallery routes working!' });
});

// 👇 important line
export default router;
