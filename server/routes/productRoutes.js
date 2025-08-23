import express from "express";

const router = express.Router();

// Example GET route
router.get("/", (req, res) => {
  res.json({ message: "Product API working!" });
});

// Example POST route
router.post("/", (req, res) => {
  res.json({ message: "Product created", data: req.body });
});

export default router;

