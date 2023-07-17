const express = require('express');
const connectionDB = require('../config/config.js');
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.app.use(express.json());
        this.dineroPath = "/api/dinero"; 
        this.accionesPath = "/api/acciones"; 
        this.tipoDineroPath = "/api/tipoDinero"; 
        this.tradersPath = "/api/traders"; 
        //Middlewares
        this.routes(); 
        this.coneccion();
    }

    routes(){
        this.app.use(this.dineroPath, require('../routes/dinero.routes.js'));
        this.app.use(this.accionesPath, require('../routes/acciones.routes.js'));
        this.app.use(this.tipoDineroPath, require('../routes/tipoDinero.routes.js'));
        this.app.use(this.tradersPath, require('../routes/traders.routes.js'));
    }
    coneccion(){
        connectionDB()
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`servidor funcionando correctamente ${this.port}`);
        })
    }
}
module.exports = Server;