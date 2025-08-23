// server/routes/orderRoutes.js
import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Order route working!" });
});

export default router;
