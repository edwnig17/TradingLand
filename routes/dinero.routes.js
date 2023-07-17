const {Router} = require('express');
const {obtenerDinero, agregarDinero, borrarDinero, actualizarDinero, oneDinero} = require('../controllers/dinero.controllers.js')
const router = Router();

router.get("/",obtenerDinero);
router.post("/",agregarDinero);
router.delete("/:id",borrarDinero),
router.patch("/:id",actualizarDinero);
router.get("/:id",oneDinero);

module.exports = router;