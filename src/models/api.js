const mongoose = require('mongoose')

const ApiSchema = mongoose.Schema({ 
    nombre: { type: String, required: true },
    pais: { type: String, required: true}
})

module.exports = mongoose.model('Api', ApiSchema )