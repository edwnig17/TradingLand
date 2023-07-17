const TipoD = require('../models/tipoDinero.js')
const obtenerTipoD = async (req,res)=>{ 
    try {
        const tipoD = await TipoD.find();
        res.json(tipoD); 
    } catch (error) {
        console.log(error);
    }
}

const agregarTipoD = async (req, res)=>{
    const tipo = new TipoD(req.body);
    try {
        const nuevoTipoD = await tipo.save();
        res.json(nuevoTipoD);
    } catch (error) {
        console.log(error);
    }
} 

const borrarTipoD = async (req,res)=>{
    try {
        await TipoD.deleteOne({_id:req.params.id});
        res.status(204)
        res.send({eliminado: "100%"});
    } catch (error) {
        res.status(404)
        res.send({error:"tipo dinero no funciona "})
    }
}
const actualizarTipoD = async (req,res)=>{
    try {
        const tipo = await TipoD.findOneAndUpdate({_id: req.params.id},req.body,{new:true});
        res.json(tipo)
    } catch (error) {
        res.status(404)
        res.send({error:"TIpo dinero no funciona"})
    }
}

const oneTipoD = async (req,res)=>{
    try {
        const oneTipoD = await TipoD.findOne({_id:req.params.id});
        res.json(oneTipoD);
    } catch (error) {
        console.log({error:"no funciona"});
    }
}

module.exports = {obtenerTipoD, agregarTipoD, borrarTipoD, actualizarTipoD, oneTipoD};