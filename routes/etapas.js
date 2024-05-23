const {Router} = require("express")

const{
    createEtapas,
    getEtapas,
    updateEtapasById
} = require("../controllers/etapas")

const router= Router ()

// crear

router.post('/',createEtapas)

//listar

router.get('/',getEtapas)

//actualizar

router.put('/:id', updateEtapasById)

module.exports = router;
