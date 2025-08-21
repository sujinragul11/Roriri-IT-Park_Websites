// server/routes/userRoutes.js
import express from "express";
import prisma from "../config/prismaClient.js";  // centralized prisma import




const router = express.Router();

// Get all users (Admin only)
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, username: true, email: true, role: true, createdAt: true },
    });
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Get single user by ID
router.get("/:id", async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id); // handles String/Int IDs
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, username: true, email: true, role: true, createdAt: true },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Delete user
router.delete("/:id", async (req, res) => {
  try {
    const id = isNaN(req.params.id) ? req.params.id : parseInt(req.params.id);
    await prisma.user.delete({ where: { id } });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

export default router;
