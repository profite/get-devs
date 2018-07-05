
var profiteDesafio = angular.module("profiteDesafio", []);

(function (app) {
    "use strict";
    app.controller('VestidoController', function ($scope, $http) {
        $scope.produtos = [];
        $scope.myNumber = 6; // valor inicial 6
        $scope.getNumber = function (num) {
            return $scope.myNumber;
        }   

        // inicio loading
        $scope.loadMoreProduct = function ($event) {
            var element = angular.element($event.target);
            $scope.myNumber = $scope.myNumber + 2;
        };
        // fim loading

        $http.get('https://api.myjson.com/bins/a38v0')
            .success(function (produtos) {
                $scope.produtos = produtos;
            })
            .error(function (erro) {
                console.log("Foi encontro um erro no donwload dos produtos: ", erro);
            });

    });

})(profiteDesafio);