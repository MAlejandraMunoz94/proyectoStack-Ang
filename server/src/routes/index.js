const { Router } = require("express");

const {
  registerUser,
  registerPQR,
  getPQR,
} = require("../controllers/handlers");

const router = Router();

//post Users crear usuarios
//put Users editar datos telefono o correo o darlos de baja
//post crear PQRS
//get  ver mis PQRS
//delete eliminar mis PQRS

router.post("/registerUser", registerUser); //OK
//router.put();
router.post("/registerPQR", registerPQR); //OK
router.get("/PQR", getPQR); // OK
//router.delete();

module.exports = router;
