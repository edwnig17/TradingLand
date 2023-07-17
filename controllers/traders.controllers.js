const Traders = require('../models/traders.js')
const obtenerTraders = async (req,res)=>{ 
    try {
        const trader = await Traders.find();
        res.json(trader); 
    } catch (error) {
        console.log(error);
    }
}

const agregarTraders = async (req, res)=>{
    const trader = new Traders(req.body);
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader);
    } catch (error) {
        console.log(error);
    }
} 

const borrarTraders = async (req,res)=>{
    try {
        await Traders.deleteOne({_id:req.params.id});
        res.status(204)
        res.send({eliminado: "100%"});
    } catch (error) {
        res.status(404)
        res.send({error:"trader no funciona"})
    }
}
const actualizarTraders = async (req,res)=>{
    try {
        const traders = await Traders.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(traders)
    } catch (error) {
        res.status(404)
        res.send({error:"traders no funciona"})
    }
}

const oneTraders = async (req,res)=>{
    try {
        const oneTrader = await Traders.findOne({_id:req.params.id});
        res.json(oneTrader);
    } catch (error) {
        console.log({error:"no funciona"});
    }
}

module.exports = {obtenerTraders, agregarTraders, borrarTraders, actualizarTraders, oneTraders};