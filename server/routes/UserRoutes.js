// server/routes/userRoutes.js
import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "User route working!" });
});

export default router;

