const Role = require('../models/role');
const Usuario = require('../models/usuario')

const esRolValido= async(rol = '') =>{
    const existeRol = await Role.findOne({rol});

    if ( !existeRol){
        throw new Error( `el rol ${ rol } no esta registrado en la BD`)
    }
}

const emailExiste = async(correo = '') =>{
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
        }
}

const existeUsuarioPorId = async(id) =>{
    //verificar si el usuario existe
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario) {
        throw new Error(`El id: ${id}, no existe`);
        }
}




module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}