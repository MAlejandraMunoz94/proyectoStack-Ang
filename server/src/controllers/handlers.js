const {
  createUser,
  createPQR,
  findPQR,
  findUser,
  deletingPQR,
  updatingUser,
  getAirportsApi,
} = require("./controllers");

const registerUser = async (req, res) => {
  const {
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
  } = req.body;

  try {
    const responseUser = await createUser(
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
    );
    res.status(200).json(responseUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { telefono, email, contrasena, activo } = req.body;

  try {
    await updatingUser(id, telefono, email, contrasena, activo);
    res.status(200).json("Informacion actualizada");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserInfo = async (req, res) => {
  const { email } = req.params;

  try {
    const response = await findUser(email);

    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      res
        .status(200)
        .json("El correo proporcionado no se encuentra registrado");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const registerPQR = async (req, res) => {
  const { UserId, tipo, prioridad, contenido } = req.body;

  try {
    const responsePQR = await createPQR(UserId, tipo, prioridad, contenido);
    res.status(200).json(responsePQR);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

const getPQRSByUser = async (req, res) => {
  const { UserId } = req.params;

  try {
    const response = await findPQR(UserId);

    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      res.status(200).json("No cuenta con solicitudes registradas");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

const deletePQR = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await deletingPQR(id);

    if (deleted === 1) {
      res.status(200).json("Solicitud eliminada");
    } else {
      res.status(200).json("No se encontro la PQR");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

const getAirports = async (req, res) => {
  try {
    const responseAirports = await getAirportsApi();
    res.status(200).json(responseAirports);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  getUserInfo,
  updateUser,
  registerPQR,
  getPQRSByUser,
  deletePQR,
  getAirports,
};
