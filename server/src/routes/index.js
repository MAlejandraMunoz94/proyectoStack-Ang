const { Router } = require("express");

const {
  registerUser,
  getUserInfo,
  registerPQR,
  getPQRSByUser,
  updateUser,
  deletePQR,
  getAirports,
  getFlights,
} = require("../controllers/handlers");

const router = Router();

//post Users crear usuarios
//put Users editar datos telefono o correo o darlos de baja
//get user traer datos de un usuario
//post crear PQRS
//get  ver mis PQRS
//delete eliminar mis PQRS

router.post("/user", registerUser); //OK
router.patch("/user/:id", updateUser); // OK
router.get("/user/:email", getUserInfo);
router.post("/PQR/:UserId", registerPQR); //OK
router.get("/PQR/:UserId", getPQRSByUser); // OK
router.delete("/PQR/:id", deletePQR); //ok
router.get("/airports", getAirports); // ok API
router.get("/flights", getFlights);

module.exports = router;
