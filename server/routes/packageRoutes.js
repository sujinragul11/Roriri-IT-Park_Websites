import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Package routes working!" });
});

export default router;
