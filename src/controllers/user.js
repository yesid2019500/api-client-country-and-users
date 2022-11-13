const { response } = require('express')
const User = require('../models/api')


const getUser = async (req, res=response) => {

    const user = await User.find()
        
            res.json({
                ok:true, 
                user
            })
    }


    const createUser = async (req,res= response ) => {

        const user = new User(req.body)
        try {
            
            const guardarUser = await user.save();
            res.json({
                ok: true, 
                user:guardarUser
            })

        } catch (error) {
            res.status(500).json({
                ok:false,
                msg: 'Hable con el administrador'
            })
        }
    }

    module.exports = {
        getUser,
        createUser
    }