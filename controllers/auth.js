const { response } = require("express");
const bcryptjs = require('bcryptjs');

const Usuario = require ('../models/usuario');

const login = async (req, res = response) => {

    const { correo, password} = req.body;


    try {
        //verificar si existe el mail
        const usuario = await Usuario.findOne({correo});
            if(!usuario){
                return res.status(400).json({
                    msg: 'usuario y contraseña no son correctas - correo'
                })
            }
        //verificar si el usuario esta activo
        if(!usuario.estado){
            return res.status(400).json({
                msg: 'usuario y contraseña no son correctas - estado false'
            })
        }
        //verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, usuario.password);
        if(!validPassword){
            return res.status(400).json({
                msg: 'usuario y contraseña no son correctas - password'
            })
        }

        //generar el jwt

        res.json({
            msg: 'login ok'
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'hable con el admin'
        })
    }

  

} 



module.exports ={
    login
}