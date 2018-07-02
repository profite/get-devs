
(function (app) {
    "use strict";
    app.controller('FiltroController', function ($scope, $http) {

        $scope.filtros = [];

        $http.get('https://api.myjson.com/bins/m97ze')
            .success(function (filtros) {
                $scope.filtros = filtros;
            })
            .error(function (erro) {
                console.log("Foi encontro um erro no donwload dos filtros: ", erro);
            })
    });

})(profiteDesafio);
