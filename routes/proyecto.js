const {Router} = require("express")
const {
    createProyecto,
    getProyectos,
    updateProyectoByID
} = require("../controllers/proyecto")

const router = Router()

// crear

router.post('/',createProyecto)

//listar

router.get('/', getProyectos)

//actuaizar

router.put('/:id', updateProyectoByID)

module.exports = router;

