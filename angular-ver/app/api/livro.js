var mongoose = require('mongoose');

module.exports = function (app) {

    var model = mongoose.model('Livro');
    var modelo = mongoose.model('Carrinho');
    /*As variaveis são para definir diferentes coleções ao banco de Dados,
    a segunda coleção é para ser o carrinho de compras*/
    
    var api = {};
    api.lista = function (req, res) {
        model.find()
            .then(function(livros) {
                res.json(livros);
            }, function (error) {
                console.log("Erro na api lista")
                console.log(erro);
                res.sendStatus(500);
            });
    }
    /*Aqui termina a api para listar os livros*/

    /*Aqui começam as apis para filtrar os livros, ao realizar mudança em uma, 
    fazer verificar se a mesma foi realizado em todos*/
    api.filtroF = function (req, res) {
        model.find()
            .then(function(livros) {
                for(i = 0; i < livros.length; i++);                
                function compativel(n){
                    if(n.genero == "Fantasia"){
                        return n;
                    }
                };

                var filtrado = livros.filter(compativel);
                res.json(filtrado);
            }, function (error) {
                console.log("Erro na api Filtro Fantasia")
                console.log(erro);
                res.sendStatus(500);
            });
    }

    api.filtroR = function (req, res) {
        model.find()
            .then(function(livros) {
                for(i = 0; i < livros.length; i++);
                function compativel(n){
                    if(n.genero == "Policial"){
                        return n;
                    }
                };

                var filtrado = livros.filter(compativel);
                res.json(filtrado);
            }, function (error) {
                console.log("Erro na api Filtro Policial")
                console.log(erro);
                res.sendStatus(500);
            });
    }
    
    /*Aqui termina o codigo das apis de filtro*/
    api.adiciona = function (req, res) {

        model.create(req.body)
            .then(function (livros) {
                res.json(livros);
            }, function (error) {
                console.log("Erro na api adicionar produtos ao db")
                console.log(erro);
                res.sendStatus(500);
            });
    }

    api.adicionar = function (req, res) {
        
                modelo.create(req.body)
                    .then(function (livros) {
                        res.json(livros);
                    }, function (error) {
                        console.log("Erro na api Adicionar ao Carrinho")
                        console.log(erro);
                        res.sendStatus(500);
                            });
            }
        
    return api;
}
