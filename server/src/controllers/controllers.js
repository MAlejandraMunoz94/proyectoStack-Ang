const { User, PQR } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const createUser = async (
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  tipoDocumento,
  numeroDocumento,
  nacimiento,
  paisOrigen,
  ciudadOrigen,
  telefono,
  email
) => {
  try {
    const filteredByEmail = await User.findAll({
      where: {
        email: { [Op.iLike]: `%${email}%` },
      },
    });

    const filteredByNumID = await User.findAll({
      where: {
        tipoDocumento: tipoDocumento,
        numeroDocumento: { [Op.iLike]: `%${numeroDocumento}%` },
      },
    });

    if (filteredByEmail.length > 0) {
      return "Este correo electronico ya se encuentra registrado";
    } else if (filteredByNumID.length > 0) {
      return "Este numero de documento ya se encuentra registrado";
    } else {
      await User.create({
        nombre1: nombre1,
        nombre2: nombre2,
        apellido1: apellido1,
        apellido2: apellido2,
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        nacimiento: nacimiento,
        paisOrigen: paisOrigen,
        ciudadOrigen: ciudadOrigen,
        telefono: telefono,
        email: email,
      });
      return "Usuario creado correctamente";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

const createPQR = async (UserId, tipo, prioridad, contenido) => {
  try {
    const newPQR = await PQR.create({
      tipo: tipo,
      prioridad: prioridad,
      contenido: contenido,
    });
    const donePQR = await newPQR.setUser(UserId);
    return donePQR;
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

const findPQR = async (UserId) => {
  try {
    const userComplaints = await PQR.findAll({
      where: { UserId: `${UserId}` },
    });
    return userComplaints;
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

module.exports = {
  createUser,
  createPQR,
  findPQR,
};
