profiteDesafio.controller('VestidoController', function ($scope, $http) {
    $scope.produtos = [];
    $scope.myNumber = 6; // valor inicial 6
    $scope.getNumber = function (num) {
        return $scope.myNumber;
    }

    $scope.loadMoreProduct = function ($event) {
        var element = angular.element($event.target);
        $scope.myNumber = $scope.myNumber + 2;
    };

    $http.get('https://api.myjson.com/bins/6ugdw')
        .success(function (produtos) {
            $scope.produtos = produtos;
        })
        .error(function (erro) {
            console.log("Foi encontro um erro no donwload dos produtos: ", erro);
        });
});
