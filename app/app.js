var app = angular.module('store', []);

app.run(function($rootScope) {
    $rootScope.cart = [];
});