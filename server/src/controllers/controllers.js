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
    const filteredByEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    const filteredByNumID = await User.findOne({
      where: {
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
      },
    });

    if (filteredByEmail) {
      return "Este correo electronico ya se encuentra registrado";
    } else if (filteredByNumID) {
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

const updatingUser = async (id, email, telefono, contrasena, activo) => {
  try {
    let filteredByEmail = false;
    let filteredByTelephone = false;

    if (email) {
      filteredByEmail = await User.findOne({
        where: {
          email: email,
        },
      });
    }

    if (telefono) {
      filteredByTelephone = await User.findOne({
        where: {
          telefono: telefono,
        },
      });
    }

    if (filteredByEmail) {
      return "El correo proporcionado ya se encuentra registrado";
    } else if (filteredByTelephone) {
      return "El telefono proporcionado ya se encuentra registrado";
    } else {
      await User.update(
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
      return "Información actualizada correctamente";
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUser = async (email) => {
  try {
    const userInfo = await User.findOne({
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
    const appId = "a5acbf5a";
    const appKey = "+5805db2da41737a91f5902ef86775419";
    const URL = `https://api.flightstats.com/flex/airports/rest/v1/json/active?appId=${appId}&appKey=${appKey}`;

    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getFlightsCode = async (code, date, hour) => {
  try {
    const appId = "a5acbf5a";
    const appKey = "5805db2da41737a91f5902ef86775419";
    const URL = `https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/${code}/arr/${date}/${hour}?appId=${appId}&appKey=${appKey}&utc=false&numHours=1&maxFlights=10`;

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
  getFlightsCode,
};
