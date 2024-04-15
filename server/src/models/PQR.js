const { DataTypes } = require("sequelize");

// Exporto una funcion que define el modelo
module.exports = (sequelize) => {
  // defino el modelo con el metodo de sequelize
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
