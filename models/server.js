const express = require("express");
const cors = require('cors');
const { dbconnection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    this.authPath = '/api/auth';



    //conectar a base de datos

    this.conectarDB();

    // middlewares
    this.middlewares();
    
    //rutas de mi aplicacion
    this.routes();
  }

  async conectarDB(){
    await dbconnection();
  }

  middlewares() {

    //CORS 
    this.app.use(cors());

    //lectura y parseo del body
    this.app.use(express.json());

    // directorio publico
    this.app.use(express.static("public"));
  }

  //metodo para manejar rutas
  routes() {
    
    this.app.use( this.usuariosPath, require('../routes/usuarios'));
    this.app.use( this.authPath, require('../routes/auth'));

  }

  //metodo listen

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto ", this.port);
    });
  }
}

module.exports = Server;
