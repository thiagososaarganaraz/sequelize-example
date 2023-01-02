import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been succesfully completed.");
    app.listen(4000);
    console.log("Server running on port " + 4000);
  } catch (error) {
    console.error("Unable to connect to the database. ", error);
  }
}

main();
