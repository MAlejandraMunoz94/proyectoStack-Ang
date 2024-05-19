const { Router } = require("express");

const {
  registerUser,
  logInUser,
  getUserInfo,
  unsuscribeUser,
  registerPQR,
  getPQRSByUser,
  updateUser,
  deletePQR,
  getAirports,
  getFlights,
} = require("../controllers/handlers");

const router = Router();

//post Users crear usuarios
//post User iniciar sesion
//patch Users editar datos telefono o correo o darlos de baja
//get user traer datos de un usuario
//post crear PQRS
//get  ver mis PQRS
//delete eliminar mis PQRS

router.post("/user/register", registerUser); //OK
router.post("/user/login", logInUser); //OK
router.get("/user/:email", getUserInfo); //OK
router.patch("/user/:id", updateUser); // OK
router.patch("/user/unsuscribe/:id", unsuscribeUser);
router.post("/PQR/:UserId", registerPQR); //OK
router.get("/PQR/:UserId", getPQRSByUser); // OK
router.delete("/PQR/:id", deletePQR); //ok
router.get("/airports", getAirports); // ok API
router.get("/flights", getFlights); // OK API

module.exports = router;
