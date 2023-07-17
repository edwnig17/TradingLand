const mongoose = require('mongoose')
const dineroSchema = mongoose.Schema({
        Criptomonedas: {
            type: String,
            required: true,
            trim: true
        },
        dineroFiat:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
);

const Dinero = mongoose.model("dineros", dineroSchema);
module.exports = Dinero;