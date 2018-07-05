
(function (app) {
    "use strict";
    app.controller('FiltroController', function ($scope, $http) {

        $scope.filtros = [];
        $scope.myNumberFilter = 5; // valor inicial 6
        $scope.getNumberFilter = function (num) {
            return $scope.myNumberFilter;
        }

        $scope.resultado = [];
        $scope.resultado = 'azul';
        // console.log("resultado: ", $scope.resultado);

        // inicio loading
        $scope.loadMoreProductFilter = function ($event) {
            var element = angular.element($event.target);
            $scope.myNumberFilter = $scope.myNumberFilter + 5;
        };
        // fim loading

        $http.get('https://api.myjson.com/bins/mqat0')
            .success(function (filtros) {
                $scope.filtros = filtros;
                // console.log("filtros: ", filtros);
                // xxx = filtros;
            })
            .error(function (erro) {
                console.log("Foi encontro um erro no donwload dos filtros: ", erro);
            })
    });


})(profiteDesafio);

var xxx = 0;
function myFunction(clicked_id) {
    compara(xxx, clicked_id);
}

function compara(xxx, clicked_id) {
    for (i = 0; i < xxx.length; i++) {
        // console.log("xxx.name", xxx[i].name);
        if (clicked_id == xxx[i].name) {
            // console.log("iguais");
            // console.log("xxx.name", xxx[i].name);
            // console.log("clicked_id: ", clicked_id);
            // console.log("________________________");
            // var comparation = clicked_id;


            console.log("nada ");
            // var comparation = "BATA ";

            // console.log("comparation: ", comparation);
            // return comparation;
        }
    }
}

function tester() {
    var comparation = "CHAPÉU";

    console.log("comparation: ", comparation);
    return comparation;
}