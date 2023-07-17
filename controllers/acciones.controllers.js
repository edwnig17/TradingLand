const Acciones = require('../models/acciones.js')
const obtenerAcciones = async (req,res)=>{ 
    try {
        const acciones = await Acciones.find();
        res.json(acciones); 
    } catch (error) {
        console.log(error);
    }
}

const agregarAcciones = async (req, res)=>{
    const acciones = new Acciones(req.body);
    try {
        const nuevoAcciones = await acciones.save();
        res.json(nuevoAcciones);
    } catch (error) {
        console.log(error);
    }
} 

const borrarAcciones = async (req,res)=>{
    try {
        await Acciones.deleteOne({_id:req.params.id});
        res.status(204)
        res.send({eliminado: "100%"});
    } catch (error) {
        res.status(404)
        res.send({error:"acciones no funciona"})
    }
}
const actualizarAcciones = async (req,res)=>{
    try {
        const acciones = await Acciones.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(acciones)
    } catch (error) {
        res.status(404)
        res.send({error:"acciones no fuciona"})
    }
}

const oneAcciones = async (req,res)=>{
    try {
        const oneAcciones = await Acciones.findOne({_id:req.params.id});
        res.json(oneAcciones);
    } catch (error) {
        console.log({error:"no funciona"});
    }
}

module.exports = {obtenerAcciones, agregarAcciones, borrarAcciones, actualizarAcciones, oneAcciones};