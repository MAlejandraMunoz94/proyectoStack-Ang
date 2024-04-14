const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
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
    tipoIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numeroIdentificacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    paisOrigen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ciudadOrigen: {
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
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};
