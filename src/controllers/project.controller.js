import { Project } from "../models/Project.js";

const getProjects = async (req, res) => {
  try {
    //Funcion de sequelize para traer todos los datos
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProject = async (req, res) => {
  try {
    //Traemos solo uno pasandole el ID desde params
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id,
      },
    });

    //Si no existen datos devolver un 404 not found
    if (!project)
      return res.status(404).json({ message: "Project does not exist" });
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const { name, priority, description } = req.body;

  //Creamos pasando name description y priority
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

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  //Editamos con findByPk que recibe el Id del dato a modificar
  const project = await Project.findByPk(id);
  project.name = name;
  project.priority = priority;
  project.description = description;
  console.log(project);

  res.send("updating");
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    //Metodo de sequelize para eliminar datos
    await Project.destroy({
      where: {
        id,
      },
    });
    res.send(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getProjects, getProject, createProject, updateProject, deleteProject };
