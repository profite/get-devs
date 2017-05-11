app.controller('storeCtrl', function($scope, $http) {

    $http.get("produtos.json")
    .then(function(response) {
        $scope.produtos = response.data.produtos;
    });

    $scope.checkboxlist = {
        cores: [
                {'nome': 'Azul', 'checked': false},
                {'nome': 'Branco', 'checked': false},
                {'nome': 'Cinza', 'checked': false},
                {'nome': 'Laranja', 'checked': false},
                {'nome': 'Verde', 'checked': false},
                {'nome': 'Vermelho', 'checked': false},
                {'nome': 'Preto', 'checked': false},
                {'nome': 'Rosa', 'checked': false},
                {'nome': 'Vinho', 'checked': false}
            ],
            tamanhos: [
                {'nome': 'P', 'checked': false},
                {'nome': 'M', 'checked': false},
                {'nome': 'G', 'checked': false},
                {'nome': 'GG', 'checked': false},
                {'nome': 'U', 'checked': false},
                {'nome': '36', 'checked': false},
                {'nome': '38', 'checked': false},
                {'nome': '40', 'checked': false},
                {'nome': '42', 'checked': false},
                {'nome': '44', 'checked': false},
                {'nome': '46', 'checked': false}
            ],
            precos: [
                {'min': '0', 'max': '50', 'checked': false},
                {'min': '51', 'max': '150', 'checked': false},
                {'min': '151', 'max': '300', 'checked': false},
                {'min': '301', 'max': '500', 'checked': false},
                {'min': '501', 'max': '100000', 'checked': false}
            ]
    };
    
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
                        var precoItem = parseFloat(item.preco);
                        var precoMin = parseFloat(precos[i].min);
                        var precoMax = parseFloat(precos[i].max);
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