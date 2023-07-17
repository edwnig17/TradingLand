const mongoose = require('mongoose')
const tradersSchema = mongoose.Schema({
    nombre: {
            type: String,
            required: true,
            trim: true
        },
        edad:{
            type:Number,
            required:true,
            trim:true
        },
        nacionalidad:{
            type:String,
            required:true,
            trim:true
        },
        presupuesto:{
            type:Number,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const Traders = mongoose.model("traders", tradersSchema);
module.exports = Traders;