const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("PQR", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    tipo: {
      type: DataTypes.ENUM("Peticion", "Queja", "Sugerencia", "Felicitacion"),
      allowNull: false,
    },
    prioridad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
