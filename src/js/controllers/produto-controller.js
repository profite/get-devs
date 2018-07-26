profiteDesafio.controller('VestidoController', function ($scope, $http) {
    $scope.produtos = [];
    $scope.myOrderBy = [];

    $scope.myNumber = 6; // valor inicial 6
    $scope.getNumber = function (num) {
        return $scope.myNumber;
    }

    $scope.loadMoreProduct = function ($event) {
        var element = angular.element($event.target);
        $scope.myNumber = $scope.myNumber + 2;
    };

    $scope.orderByMe = function (x) {
        console.log("click");
        $scope.myOrderBy = x;
    }

    $http.get('https://api.myjson.com/bins/6ugdw')
        .success(function (produtos) {
            $scope.produtos = produtos;
            console.log("produtos: ", produtos)
        })
        .error(function (erro) {
            console.log("Foi encontro um erro no donwload dos produtos: ", erro);
        });


});

function orderByMe(x) {

}