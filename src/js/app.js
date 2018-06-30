var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("https://api.myjson.com/bins/urnji")
        .then(function (response) {
            $scope.myFileArq = response.data;
            console.log(response.data);
        });
});

