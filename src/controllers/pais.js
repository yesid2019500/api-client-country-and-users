const { response } = require('express')
const Pais = require('../models/pais')


const getCountry = async (req, res=response) => {

    const pais = await Pais.find()
        
            res.json({
                ok:true, 
                pais
            })
    }


    const createCountry = async (req,res= response ) => {

        const pais = new Pais(req.body)
        try {
            
            const guardarCountry = await pais.save();
            res.json({
                ok: true, 
                user:guardarCountry
            })

        } catch (error) {
            res.status(500).json({
                ok:false,
                msg: 'Hable con el administrador'
            })
        }
    }

    module.exports = {
        getCountry,
        createCountry
    }