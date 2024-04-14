const { User, PQR } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const createUser = async (
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  tipoIdentificacion,
  numeroIdentificacion,
  nacimiento,
  paisOrigen,
  ciudadOrigen,
  telefono,
  email,
  activo
) => {
  const filteredByEmail = await User.findAll({
    where: {
      email: { [Op.iLike]: `%${email}%` },
    },
  });

  const filteredByNumID = await User.findAll({
    where: {
      tipoIdentificacion: tipoIdentificacion,
      numeroIdentificacion: { [Op.iLike]: `%${numeroIdentificacion}%` },
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
      tipoIdentificacion: tipoIdentificacion,
      numeroIdentificacion: numeroIdentificacion,
      nacimiento: nacimiento,
      paisOrigen: paisOrigen,
      ciudadOrigen: ciudadOrigen,
      telefono: telefono,
      email: email,
      activo: activo,
    });
    return "Usuario creado correctamente";
  }
}; //OK

const createPQR = async (UserId, tipo, prioridad, contenido) => {
  const newPQR = await PQR.create({
    tipo: tipo,
    prioridad: prioridad,
    contenido: contenido,
  });
  await newPQR.addUser(UserId);
  return "Solicitud creada correctamente";
}; //OK

const findPQR = async (UserId) => {
  try {
    const complaints = await PQR.findAll({
      where: { UserId: { [Op.iLike]: `%${UserId}%` } },
    });
    return complaints;
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

module.exports = {
  createUser,
  createPQR,
  findPQR,
};
