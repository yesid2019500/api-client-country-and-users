const { response } = require('express')
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response , next) => {
    // valdacion express-validator
// si no hay ningun error llamamos el next()
// si hay un error hacemos el return y nunca llamamos el next();
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({
        ok: false,
        errors: errors.mapped()
    });
}

next();
}



module.exports ={
    validarCampos
} 