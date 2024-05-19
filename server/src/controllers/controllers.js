const { User, PQR } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const axios = require("axios");
const bcrypt = require("bcryptjs");

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

    const filteredByTelNumber = await User.findOne({
      where: {
        telefono: telefono
      },
    });

    if (filteredByEmail) {
      return "Este correo electronico ya se encuentra registrado";
    } else if (filteredByNumID) {
      return "Este numero de documento ya se encuentra registrado";
    } else if (filteredByTelNumber) {
      return "Este numero de telefono ya se encuentra registrado";
    } else {
      let hashPass = bcrypt.hashSync(contrasena,12);

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
        contrasena: hashPass,
      });
      return "Usuario creado correctamente";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}; //OK

const verificateUser = async (email, contrasena) => {
  try {

    const filteredByEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    console.log(filteredByEmail);

    if (!filteredByEmail){
      return "Verifique las credenciales ingresadas correo"
    }

    if(!filteredByEmail.activo){
      return "Verifique las credenciales ingresadas inactivo"
    }

    const equal = bcrypt.compareSync(contrasena,filteredByEmail.contrasena);

    if (!equal){
      return "Verifique las credenciales ingresadas contrasena"
    }

    return { succes: true, data: filteredByEmail, token: "Aqui va el token"}

  } catch (error) {
    throw new Error(error.message);
  }
}

const updatingUser = async (id, newEmail, newTelefono, newContrasena) => {
  try {

    if (newEmail !== "") {
    let filteredByEmail = await User.findOne({
        where: {
          email: newEmail,
        },
      });

      if (filteredByEmail) {
        return "El correo proporcionado ya se encuentra registrado";
      } else{
      await User.update(
        {
          email: newEmail
        },
        {
          where: { id: id },
        }
      );}
    }

    if(newContrasena!== ""){
      let userPassword = await User.findOne({where: { id: id }});
      let samePassword = bcrypt.compareSync(newContrasena, userPassword.contrasena);

      if (samePassword){
        return "Proporcione una contrasena distinta a la actual"
      } else{
      await User.update(
        {
          contrasena: bcrypt.hashSync(newContrasena,12)
        },
        {
          where: { id: id },
        }
      );}
    }

    if (newTelefono!== "") {
      let filteredByTelephone = await User.findOne({
        where: {
          telefono: newTelefono,
        },
      });

      if (filteredByTelephone) {
        return "El telefono proporcionado ya se encuentra registrado";
      } else{
      await User.update(
        {
          telefono: newTelefono
        },
        {
          where: { id: id },
        }
      );}
    }
    return "Información actualizada correctamente";
  
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeStateUser = async (id, newActivo) => {
  try {
    await User.update(
      {
        activo: newActivo
      },
      {
        where: { id: id },
      }
    );

    return "Usuario desahibilitado"
  } catch (error) {
    throw new Error(error.message); 
  }
}

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
  verificateUser,
  changeStateUser,
  createPQR,
  findPQR,
  findUser,
  deletingPQR,
  updatingUser,
  getAirportsApi,
  getFlightsCode,
};
