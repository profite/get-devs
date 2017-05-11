app.controller('storeCtrl', function($scope, $http) {

    $http.get("produtos.json")
    .then(function(response) {
        $scope.produtos = response.data.produtos;
        console.log($scope.produtos);
    });

    $http.get("filtros.json")
    .then(function(response) {
        $scope.checkboxlist = response.data;

    });
    
    $scope.addThis = function(produto) {
        $scope.cart.push(produto);
    };

    $scope.limite = 9;
    $scope.loadMore = function() {         
        var incremento = $scope.limite + 9;
        if(incremento > $scope.produtos.length) {
            $scope.limite = $scope.produtos.length;
        } else {
            $scope.limite = incremento;
        }
    };

    $scope.limiteCores = 5;
    $scope.showAllCores = function() {
        var incremento = $scope.limiteCores + 9;
        if(incremento > $scope.checkboxlist.cores.length) {
            $scope.limiteCores = $scope.checkboxlist.cores.length;
        } else {
            $scope.limiteCores = incremento;
        }
    };

    $scope.toggleFilters = "hidden-xs";
    $scope.showFilters = function() {
        $scope.toggleFilters = "visible-xs";
    };
    $scope.hideFilters = function() {
        $scope.toggleFilters = "hidden-xs";
    };

    $scope.toggleSelOrder = "hidden-xs";
    $scope.showSelOrder = function() {
        $scope.toggleSelOrder = "visible-xs";
    };
    $scope.hideSelOrder = function() {
        $scope.toggleSelOrder = "hidden-xs";
    };
});

app.filter('preco', function() {
    return function(items, precos) {
        if(precos.length > 0) {
            var filtered = [];
            var checkedFlag = false;
            angular.forEach(items, function(item) {
                for(var i=0; i<precos.length; i++) {
                    if(precos[i].checked) {
                        checkedFlag = true;
                        var precoItem = parseInt(item.preco);
                        var precoMin = parseInt(precos[i].min);
                        var precoMax = parseInt(precos[i].max);
                        if(precoItem >= precoMin && precoItem < precoMax + 1) {
                            filtered.push(item);
                            break;
                        }
                    }
                }
            });

            if(checkedFlag) {
                return filtered;
            }
        } 
        return items;
    }; 
});

app.filter('cor', function() {
    return function(items, cores) {
        if(cores.length > 0) {
            var filtered = [];
            var checkedFlag = false;
            angular.forEach(items, function(item) {
                for(var i=0; i<cores.length; i++) {
                    if(cores[i].checked) {
                        checkedFlag = true;
                        var cor = cores[i].nome.toLowerCase();
                        if(item.cores.indexOf(cor) !== -1) {
                            filtered.push(item);
                            break;   
                        }
                    }
                }
            });

            if(checkedFlag) {
                return filtered;
            }
        } 
        return items;
    }; 
});

app.filter('tamanho', function() {
    return function(items, tamanhos) {
        if(tamanhos.length > 0) {
            var filtered = [];
            var checkedFlag = false;
            angular.forEach(items, function(item) {
                for(var i=0; i<tamanhos.length; i++) {
                    if(tamanhos[i].checked) {
                        checkedFlag = true;
                        if(item.tamanhos.indexOf(tamanhos[i].nome) !== -1) {
                            filtered.push(item);
                            break;   
                        }
                    } 
                }
            });
            if(checkedFlag) {
                return filtered;
            }
        } 
        return items;
    }; 
});