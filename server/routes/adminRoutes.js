// server/routes/adminRoutes.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Example: Admin dashboard route
router.get("/dashboard", async (req, res) => {
  try {
    const userCount = await prisma.user.count();
    const orderCount = await prisma.order.count();
    res.json({ message: "Admin Dashboard Data", userCount, orderCount });
  } catch (error) {
    console.error("Error in admin dashboard:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Example: Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
