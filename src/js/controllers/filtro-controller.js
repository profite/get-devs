profiteDesafio.controller('FiltroController', function ($scope, $http) {
    $scope.filtros = [];
    $scope.myNumberFilter = 5; // valor inicial 5
    $scope.getNumberFilter = function (num) {
        return $scope.myNumberFilter;
    }

    $scope.resultado = [];
    $scope.resultado = 'azul';

    $scope.loadMoreProductFilter = function ($event) {
        var element = angular.element($event.target);
        $scope.myNumberFilter = $scope.myNumberFilter + 5;
    };

    $http.get('https://api.myjson.com/bins/mqat0')
        .success(function (filtros) {
            $scope.filtros = filtros;
        })
        .error(function (erro) {
            console.log("Foi encontro um erro no donwload dos filtros: ", erro);
        })
});
