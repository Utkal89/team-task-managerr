import express from "express";
import Project from "../models/Project.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    createdBy: req.user.id
  });
  res.json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({ createdBy: req.user.id });
  res.json(projects);
});

export default router;