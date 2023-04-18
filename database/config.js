const mongoose = require ('mongoose');


const dbconnection = async ()=>{

    try {
        
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion con la bd');
    }

}




module.exports= {
    dbconnection
}