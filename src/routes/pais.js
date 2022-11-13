const express = require('express')
const { check } = require('express-validator')
const routes = express.Router()

const { validarCampos } = require('../middleware/validar-campos')
const { getCountry, createCountry  } = require('../controllers/pais')

routes.get('/', getCountry )

routes.post('/', [
  
  check('pais','El pais es oligatorio').not().isEmpty(),
  validarCampos
    ], 
    
    createCountry
)


module.exports = routes