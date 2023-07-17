const mongoose = require('mongoose')
const accionesSchema = mongoose.Schema({
        acciones: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps:true
    }
);

const Acciones = mongoose.model("acciones", accionesSchema);
module.exports = Acciones;