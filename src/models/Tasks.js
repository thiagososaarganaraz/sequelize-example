import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
