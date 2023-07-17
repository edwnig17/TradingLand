const {Router} = require('express');
const {obtenerAcciones, agregarAcciones, borrarAcciones, actualizarAcciones, oneAcciones} = require('../controllers/acciones.controllers.js')
const router = Router();

router.get("/",obtenerAcciones);
router.post("/",agregarAcciones);
router.delete("/:id",borrarAcciones),
router.patch("/:id",actualizarAcciones);
router.get("/:id",oneAcciones);

module.exports = router;