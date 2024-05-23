// Aquí estoy importando mongoose para así poder acceder a la base de datos
const mongoose = require('mongoose');
require('dotenv').config();  // Carga las variables de entorno desde el archivo .env

// Aquí creamos esta constante para dar acceso a la base de datos y manejar los errores
const getConnection = async () => {
    try {
        await mongoose.connect(process.env.BASE_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('La conexión ha sido exitosa');
    } catch (error) {
        console.log('Error al conectar con la base de datos:', error);
    }
}

// Exportamos la función
module.exports = { getConnection };