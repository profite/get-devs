var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },    
    url: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    genero: {
        type: String,
    }
});

mongoose.model('Livro', schema);
