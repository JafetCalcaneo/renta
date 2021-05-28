const {Router} = require('express');
const router = Router();
const { unlink } = require('fs-extra');
const path = require('path');

const Carro = require('../models/Carros');

router.get('/', async (req, res) => {
    const carros = await Carro.find()
    res.json(carros);
    
});

router.post('/', async (req, res) => {
    const {nombre, marca,color, matricula,precio} = (req.body);
    const imagePath = '/uploads/' + req.file.filename;
    const newCarro = new Carro({nombre, marca,color, matricula,precio, imagePath});
    await newCarro.save();
    res.json({message: 'Carro guardado'});
});

router.delete('/:id', async (req, res) => {
    const carro = await Carro.findByIdAndDelete(req.params.id);
    unlink(path.resolve('./backend/public/' + carro.imagePath))
    res.json({message: 'Carro eliminado'});
    
});

module.exports = router;