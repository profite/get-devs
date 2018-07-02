
(function (app) {
    "use strict";
    app.controller('FiltroController', function ($scope, $http) {

        $scope.tamanhos = [];

        $http.get('https://api.myjson.com/bins/1eybca')
            .success(function (tamanhos) {
                $scope.tamanhos = tamanhos;
            })
            .error(function (erro) {
                console.log("Foi encontro um erro no donwload dos tamanhos: ", erro);
            })
    });

})(profiteDesafio);