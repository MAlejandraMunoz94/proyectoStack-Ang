const { User, PQR } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");

const createUser = async (
  nombre1,
  nombre2,
  apellido1,
  apellido2,
  tipoDocumento,
  numeroDocumento,
  nacimiento,
  paisOrigen,
  telefono,
  email,
  contrasena
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
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        tipoDocumento,
        numeroDocumento,
        nacimiento,
        paisOrigen,
        telefono,
        email,
        contrasena,
      });
      return "Usuario creado correctamente";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

const updatingUser = async (id, telefono, email, contrasena, activo) => {
  try {
    const userUpdated = await User.update(
      {
        email: email,
        telefono: telefono,
        contrasena: contrasena,
        activo: activo,
      },
      {
        where: { id: id },
      }
    );
    return userUpdated;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUser = async (email) => {
  try {
    const userInfo = await User.findAll({
      where: { email: email },
    });
    return userInfo;
  } catch (error) {
    throw new Error(error.message);
  }
};

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
      where: { UserId: UserId },
    });
    return userComplaints;
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

const deletingPQR = async (id) => {
  try {
    const delSucces = await PQR.destroy({
      where: { id: id },
    });
    return delSucces;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAirportsApi = async () => {
  try {
    const URL =
      "https://api.flightstats.com/flex/airports/rest/v1/json/active?appId=a5acbf5a&appKey=+5805db2da41737a91f5902ef86775419";

    const { data } = await axios.get(URL);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUser,
  createPQR,
  findPQR,
  findUser,
  deletingPQR,
  updatingUser,
  getAirportsApi,
};
