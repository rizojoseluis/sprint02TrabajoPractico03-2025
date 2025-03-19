/* Configura la conexión centralizada a MongoDB.
Únida instancia de conexión que puede ser utilizada en cualquier parte
del proyecto. */

import mongoose from "mongoose";

export async function connectDB() {
    try{
        await mongoose.connect('mongodb+srv://grupo-02:grupo02@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB');
    } catch (error){
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}