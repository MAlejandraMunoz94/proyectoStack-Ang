require("dotenv").config();
const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const PQRModel = require("./models/PQR");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/proyectostack`,
  {
    logging: false,
    native: false,
  }
);
// creo la instancia de SEQUELIZE con los datos de la conexion a la BBDD y la exporto para ejecutarla
//al momento de levantar el servidor

UserModel(sequelize);
PQRModel(sequelize);

const { User, PQR } = sequelize.models;

User.hasMany(PQR, { foreignKey: "UserId", sourceKey: "id" });
PQR.belongsTo(User, { foreignKey: "UserId", targetKeyKey: "id" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos
  sequelize, // para importart la conexión {sequelize}
};
