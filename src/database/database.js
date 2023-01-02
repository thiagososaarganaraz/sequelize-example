import Sequelize from "sequelize";

export const sequelize = new Sequelize("proyectdb", "postgres", "43002627", {
  host: "localhost",
  dialect: "postgres",
});
