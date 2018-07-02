
var profiteDesafio = angular.module("profiteDesafio", []);

(function (app) {
    "use strict";
    app.controller('VestidoController', function ($scope, $http) {

        $scope.produtos = [];


        $scope.filtro = [];

        $http.get('https://api.myjson.com/bins/azwxm')
            .success(function (produtos) {
                $scope.produtos = produtos;
            })
            .error(function (erro) {
                console.log("Foi encontro um erro no donwload dos produtos: ", erro);
            });

    });

})(profiteDesafio);