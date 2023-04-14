const {response} = require('express');

const usuariosGet =(req, res=response) => {
    
    const {q,nombre} = req.query;

    res.json({
      ok: true,
      msg: "get API - controlador",
      q,
      nombre
    });
  }


  const usuariosPost =(req, res) => {

    const {nombre,edad} = req.body;

    res.json({
      
        msg: "post API - controlador",
        nombre,
        edad
    });
  }

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.status(201).json({
      ok: true,
      msg: "put API - controlador",
      id
    });
  }


const usuariosDelete = (req, res) => {
    res.json({
      ok: true,
      msg: "delete API- controlador",
    });
  }

  module.exports= {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
  }