const {Schema, model} = require('mongoose');
const CarroSchema = new Schema({
    nombre: {type: String, required: true},
    marca: {type: String},
    matricula: {type: String},
    color: {type: String, required: true},
    precio: {type: Number, required: true},
    imagePath: {type: String, required: true},

});

module.exports = model('Carro', CarroSchema);