const Dinero = require('../models/dinero.js')
const obtenerDinero = async (req,res)=>{ 
    try {
        const dinero = await Dinero.find();
        res.json(dinero); 
    } catch (error) {
        console.log(error);
    } 
}

const agregarDinero = async (req, res)=>{
    const dinero = new Dinero(req.body);
    try {
        const nuevoDinero = await dinero.save();
        res.json(nuevoDinero);
    } catch (error) {
        console.log(error);
    }
} 

const borrarDinero = async (req,res)=>{
    try {
        await Dinero.deleteOne({_id:req.params.id});
        res.status(204)
        res.send({eliminado: "100%"});
    } catch (error) {
        res.status(404)
        res.send({error:"dinero no funciona"})
    }
}
const actualizarDinero = async (req,res)=>{
    try {
        const dinero = await Dinero.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(dinero)
    } catch (error) {
        res.status(404)
        res.send({error:"dinero no  funciona"})
    }
}

const oneDinero = async (req,res)=>{
    try {
        const oneDinero = await Dinero.findOne({_id:req.params.id});
        res.json(oneDinero);
    } catch (error) {
        console.log({error:"no funciona"});
    }
}

module.exports = {obtenerDinero, agregarDinero, borrarDinero, actualizarDinero, oneDinero};