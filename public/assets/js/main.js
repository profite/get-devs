"use strict";

var app = angular.module("appProfite", ['ngRoute']);

(function (app) {
  app.run(["$rootScope", function ($rootScope) {
    $rootScope.listaCompra = [];
  }]).constant("OrdenarOpt", [{ id: 0, label: "Mais Recentes" }, { id: 1, label: "Menor Preço" }, { id: 2, label: "Maior Preço" }]);
})(app);

(function (app) {

  var configRoute = function configRoute($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController'
    }).when('/carrinho', {
      templateUrl: 'views/carrinho-compras.html',
      controller: 'carrinhoController'
    }).otherwise('/');
  };

  app.config(["$routeProvider", configRoute]);
})(app);
"use strict";

(function (app) {
  var CarrinhoCTRL = function CarrinhoCTRL($scope, $rootScope) {
    $scope.ListaCompras = $rootScope.listaCompra;
  };

  app.controller('carrinhoController', ["$scope", "$rootScope", CarrinhoCTRL]);
})(app);

(function (app) {
  var HomeCTRL = function HomeCTRL($scope, OrdenarOpt, $rootScope, Model) {
    var itensCollapseCor = 5;
    var collapseClose = false;
    $scope.ordernarList = OrdenarOpt;
    $scope.ordenarTipo = null;
    $scope.Cores = [];
    $scope.Precos = [];
    $scope.Tamanhos = [];
    $scope.Produtos = [];
    $scope.produtosCopia = [];
    $scope.corSelecionada = { id: 0 };
    $scope.precoSelecionado = { id: 0 };
    $scope.tamanhoSelecionado = { id: 0 };
    $scope.pagina = 1;
    $scope.txtExpandCores = "Ver todas as cores";
    $scope.coresOpen = false;

    var getProdutos = function getProdutos(skip) {
      Model.Produtos.get(skip).then(function (res) {
        for (var i in res) {
          res[i].produto.addCart = false;
          $scope.Produtos.push(res[i]);
          $scope.produtosCopia.push(res[i]);
        }
      });
    };

    var collapse = function collapse(list) {
      var boxcores = document.querySelector("#lista-cores");
      angular.element(boxcores).ready(function () {
        var listaCores = boxcores.querySelectorAll("li");
        if (listaCores.length) {
          for (var i = 0; i < listaCores.length; i++) {
            if (i > itensCollapseCor && listaCores[i].className.indexOf("colapse") < 0) {
              angular.element(listaCores[i]).addClass('colapse hide');
            }
          }
        }
      });
    };

    $scope.troggleColapse = function () {
      var lista = document.querySelectorAll(".colapse");
      for (var i = 0; i < lista.length; i++) {
        if (lista[i].className.indexOf("hide") < 0) {
          angular.element(lista[i]).addClass('hide');
          $scope.txtExpandCores = "Ver todas as cores";
        } else if (lista[i].className.indexOf("hide") > 0) {
          var el = angular.element(lista[i]);
          el.removeClass('hide');
          $scope.txtExpandCores = "Ocultar as cores";
        }
      }
      $scope.coresOpen = !$scope.coresOpen;
      trataClasseBtn($scope.coresOpen);
    };

    var trataClasseBtn = function trataClasseBtn(ocasiao) {
      var bt = document.querySelector("#btnCores");
      var seta = bt.querySelector('.arrow');
      var classeSeta = seta.className;
      if (!ocasiao) {
        classeSeta = classeSeta.split(" ");
        classeSeta.splice(1, classeSeta.indexOf('open'));
        seta.className = classeSeta.join(" ");
      } else {
        seta.className += " open";
      }
    };

    Model.Cores.get().then(function (res) {
      $scope.Cores = res;collapse();
    }, function (err) {
      console.log(err);
    });
    Model.Preco.get().then(function (res) {
      $scope.Precos = res;
    }, function (err) {
      console.error(err);
    });
    Model.Tamanhos.get().then(function (res) {
      $scope.Tamanhos = res;
    }, function (err) {
      console.error(err);
    });

    $scope.selecionaCor = function (cor) {
      $scope.corSelecionada = cor;
    };
    $scope.selecionaPreco = function (preco) {
      $scope.precoSelecionado = preco;
    };
    $scope.selecionaTamanho = function (tamanho) {
      $scope.tamanhoSelecionado = tamanho;
    };
    $scope.replaceValor = function (valor) {
      return valor.toFixed(2).replace(".", ",");
    };
    $scope.addCarrinho = function (item) {
      item.produto.addCart = true;
      $rootScope.listaCompra.push(item);
    };

    $scope.filtro = function () {
      if ($scope.corSelecionada.id > 0) {
        $scope.Produtos = [];
        $scope.produtosCopia;
      } else {
        $scope.Produtos = angular.copy($scope.produtosCopia);
      }
    };

    getProdutos($scope.pagina);
  };

  app.controller('homeController', ["$scope", "OrdenarOpt", "$rootScope", "Model", HomeCTRL]);
})(app);
'use strict';

(function (app) {

  var CoresService = function CoresService($q, $http) {
    var def = $q.defer();
    var listaCores = [];
    var getService = function getService() {
      if (listaCores.length) {
        def.resolve(listaCores);
      } else {
        $http.get("data_db/cores.json").success(function (res) {
          listaCores = res;
          def.resolve(res);
        }).error(function (err) {
          def.reject(err);
        });
      }
    };

    var get = function get() {
      return def.promise;
    };

    var find = function find(busca) {
      listaCores.map(function (item) {
        return item.id === busca.id;
      });
    };

    getService();

    return {
      get: get,
      find: find
    };
  };

  app.factory("Cores", ["$q", "$http", CoresService]);
})(app);

(function (app) {
  var ServicosModels = function ServicosModels(Cores, Tamanhos, Preco, Produtos) {
    return {
      Cores: Cores,
      Tamanhos: Tamanhos,
      Preco: Preco,
      Produtos: Produtos
    };
  };

  app.factory("Model", ["Cores", "Tamanhos", "Preco", "Produtos", ServicosModels]);
})(app);

'use strict';
(function (app) {

  var PrecoService = function PrecoService($q, $http) {
    var def = $q.defer();
    var listaPreco = [];
    var getService = function getService() {
      if (listaPreco.length) {
        def.resolve(listaPreco);
      } else {
        $http.get("data_db/faixa_preco.json").success(function (res) {
          listaPreco = res;
          def.resolve(res);
        }).error(function (err) {
          def.reject(err);
        });
      }
    };

    var get = function get() {
      return def.promise;
    };

    var find = function find(busca) {
      listaPreco.map(function (item) {
        return item.id === busca.id;
      });
    };

    getService();

    return {
      get: get,
      find: find
    };
  };

  app.factory("Preco", ["$q", "$http", PrecoService]);
})(app);

(function (app) {
  var ProdutosModel = function ProdutosModel($q, $http) {
    var def = $q.defer();
    var listaProdutos = [];

    var get = function get(skip) {
      if (listaProdutos.length) {
        def.resolve(listaProdutos);
      } else {
        $http.get("data_db/produtos_" + skip + ".json").success(function (res) {
          def.resolve(res);
        }).error(function (err) {
          def.reject(err);
        });
      }
      return def.promise;
    };
    return {
      get: get
    };
  };
  app.factory("Produtos", ["$q", "$http", ProdutosModel]);
})(app);

'use strict';
(function (app) {

  var TamanhosService = function TamanhosService($q, $http) {
    var def = $q.defer();
    var listaTamanhos = [];
    var getService = function getService() {
      if (listaTamanhos.length) {
        def.resolve(listaTamanhos);
      } else {
        $http.get("data_db/tamanhos.json").success(function (res) {
          listaTamanhos = res;
          def.resolve(res);
        }).error(function (err) {
          def.reject(err);
        });
      }
    };

    var get = function get() {
      return def.promise;
    };

    var find = function find(busca) {
      listaTamanhos.map(function (item) {
        return item.id === busca.id;
      });
    };

    getService();

    return {
      get: get,
      find: find
    };
  };

  app.factory("Tamanhos", ["$q", "$http", TamanhosService]);
})(app);