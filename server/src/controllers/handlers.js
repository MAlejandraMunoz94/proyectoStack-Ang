const { createUser, createPQR, findPQR } = require("./controllers");

const registerUser = async (req, res) => {
  const {
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
    activo,
  } = req.body;

  try {
    const responseUser = await createUser(
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
    );
    res.status(200).json(responseUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

const registerPQR = async (req, res) => {
  const { UserId, tipo, prioridad, contenido } = req.body;

  try {
    const responsePQR = await createPQR(UserId, tipo, prioridad, contenido);
    res.status(200).json(responsePQR);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

const getPQR = async (req, res) => {
  const { UserId } = req.params;

  try {
    const response = await findPQR(UserId);

    if (response.length > 0) {
      res.status(200).json(response);
    } else {
      throw new Error("No cuenta con solicitudes registradas");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; //OK

module.exports = {
  registerUser,
  registerPQR,
  getPQR,
};
