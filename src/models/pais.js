const mongoose = require('mongoose')

const PaisSchema = mongoose.Schema({ 
    pais: { type: String, required: true },
});

module.exports = mongoose.model('Pais', PaisSchema )

