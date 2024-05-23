const {Router} = require("express")

const{
    createTipoProyecto,
    getTipoProyectos,
    updateTipoEquipoByID
}= require("../controllers/tipoProyecto")

const router = Router()

//crear

router.post('/', createTipoProyecto)

// listar

router.get('/',getTipoProyectos)

//actualizar

router.put('/:id', updateTipoEquipoByID)

module.exports = router;
