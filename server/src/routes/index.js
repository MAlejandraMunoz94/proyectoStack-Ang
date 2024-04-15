const { Router } = require("express");

const {
  registerUser,
  registerPQR,
  getPQRSByUser,
  updateUser,
  deletePQR,
} = require("../controllers/handlers");

const router = Router();

//post Users crear usuarios
//put Users editar datos telefono o correo o darlos de baja
//post crear PQRS
//get  ver mis PQRS
//delete eliminar mis PQRS

router.post("/user", registerUser); //OK
router.put("/user/:id", updateUser);
router.post("/PQR", registerPQR); //OK
router.get("/PQR/:UserId", getPQRSByUser); // OK
router.delete("/PQR/:id", deletePQR);

module.exports = router;
