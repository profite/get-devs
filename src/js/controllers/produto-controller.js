
var profiteDesafio = angular.module("profiteDesafio", []);

(function (app) {
    "use strict";
    app.controller('VestidoController', function ($scope) {

        $scope.produtos = [
            {
                nome: 'PRAIA COM FIVELA',
                url: 'http://surtocriativo.com.br/andesenv/src/image/produto1.jpg',
                fototitulo: 'vestido',
                valor: '398',
                prestacao: '5',
                valorprestacao: '30,00'
            },
            {
                nome: 'CHAPÉU',
                url: 'http://surtocriativo.com.br/andesenv/src/image/produto2.jpg',
                fototitulo: 'vestido-black',
                valor: '248',
                prestacao: '2',
                valorprestacao: '18,00'
            }
        ]
    });

})(profiteDesafio);