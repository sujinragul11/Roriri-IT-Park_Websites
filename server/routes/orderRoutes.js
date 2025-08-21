// server/routes/orderRoutes.js
import express from "express";

const router = express.Router();

// Example route (GET /api/orders)
router.get("/", (req, res) => {
  res.json({ message: "Orders route working!" });
});

export default router;
