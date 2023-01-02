import { Router } from "express";
import {
  createProject,
  getProjects,
} from "../controllers/project.controller.js";

export const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id");
router.delete("/projects/:id");
router.get("/projects/:id");

export default router;
