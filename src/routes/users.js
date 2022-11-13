const express = require('express')
const { check } = require('express-validator')
const routes = express.Router()

const { validarCampos } = require('../middleware/validar-campos')
const { getUser, createUser  } = require('../controllers/user')

routes.get('/', getUser )

routes.post('/', [
  
  check('nombre','El nombre es oligatorio').not().isEmpty(),
  check('pais','El pais es oligatorio').not().isEmpty(),
  validarCampos
    ], 
    
    createUser
)


module.exports = routes