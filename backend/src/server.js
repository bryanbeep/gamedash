const app = require("./app");
const sequelize = require("./config/database");
require("./models/User");
require("./models/Product");

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
    await sequelize.sync();
    console.log("Tablas sincronizadas");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar la base de datos:", error.message);
  }
}

main();
