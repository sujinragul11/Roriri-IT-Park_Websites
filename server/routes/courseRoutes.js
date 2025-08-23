// server/routes/courseRoutes.js
import express from "express";

const router = express.Router();

// Example: Get all courses
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Full Stack Development", duration: "6 Months" },
    { id: 2, name: "Data Science", duration: "4 Months" },
  ]);
});

// Example: Add a new course
router.post("/", (req, res) => {
  const { name, duration } = req.body;
  res.json({ message: "Course added successfully", course: { name, duration } });
});

export default router;
