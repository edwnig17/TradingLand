const {Router} = require('express');
const {obtenerTipoD, agregarTipoD, borrarTipoD, actualizarTipoD, oneTipoD} = require('../controllers/tipoDinero.controllers.js')
const router = Router();

router.get("/",obtenerTipoD);
router.post("/",agregarTipoD);
router.delete("/:id",borrarTipoD),
router.patch("/:id",actualizarTipoD);
router.get("/:id",oneTipoD);

module.exports = router;