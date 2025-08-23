// server/routes/inquiryRoutes.js
import express from "express";

const router = express.Router();

// Example inquiry route
router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Inquiry received:", { name, email, message });
  res.json({ success: true, message: "Inquiry submitted successfully!" });
});

export default router;
