var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    titulo: {
        type: String,
    },    
    url: {
        type: String,
    },
    preco: {
        type: Number,
    },
    editora: {
        type: String,
    },
    genero: {
        type: String,
    }
});

mongoose.model('Carrinho', schema);
