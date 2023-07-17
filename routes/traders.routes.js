const {Router} = require('express');
const {obtenerTraders, agregarTraders, borrarTraders, actualizarTraders, oneTraders} = require('../controllers/traders.controllers.js')
const router = Router();

router.get("/",obtenerTraders);
router.post("/",agregarTraders);
router.delete("/:id",borrarTraders),
router.patch("/:id",actualizarTraders);
router.get("/:id",oneTraders);

module.exports = router;