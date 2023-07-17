const mongoose = require('mongoose')
const tipoDSchema = mongoose.Schema({
        fiat: {
            type: Number,
            required: true,
            trim: true
        },
        cryptomonedas:{
            type:Number,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const TipoD = mongoose.model("tipodineros", tipoDSchema);
module.exports = TipoD;