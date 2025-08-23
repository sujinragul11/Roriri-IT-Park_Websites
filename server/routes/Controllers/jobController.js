// server/controllers/jobController.js
import { prisma } from "../config/database.js";

// ✅ Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

// ✅ Create new job
export const createJob = async (req, res) => {
  try {
    const { title, description, location } = req.body;
    const job = await prisma.job.create({
      data: { title, description, location },
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to create job" });
  }
};

// ✅ Delete job
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.job.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete job" });
  }
};
