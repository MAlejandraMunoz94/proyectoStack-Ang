const { DataTypes } = require("sequelize");

// Exporto una funcion que define el modelo
module.exports = (sequelize) => {
  // defino el modelo con el metodo de sequelize
  sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipoDocumento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroDocumento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    paisOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
