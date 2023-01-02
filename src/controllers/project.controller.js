import { Project } from "../models/Project.js";

const getProjects = async (req, res) => {
  try {
    throw new Error("query failed");
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name,
      description,
      priority,
    });

    res.send("creating projects");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export { getProjects, createProject };
