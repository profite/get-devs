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
      }).otherwise('/');
   };

   app.config(["$routeProvider", configRoute]);
})(app);
"use strict";

(function (app) {
  var HomeCTRL = function HomeCTRL($scope, OrdenarOpt, $rootScope, Model) {
    $scope.ordernarList = OrdenarOpt;
    $scope.ordenarTipo = null;
    $scope.Cores = $scope.Precos = $scope.Tamanhos = [];
    $scope.corSelecionada = $scope.precoSelecionado = $scope.tamanhoSelecionado = { id: 0 };

    Model.Cores.get().then(function (res) {
      return $scope.Cores = res;
    }, function (err) {
      return console.log(err);
    });
    Model.Preco.get().then(function (res) {
      return $scope.Precos = res;
    }, function (err) {
      return console.error(err);
    });
    Model.Tamanhos.get().then(function (res) {
      return $scope.Tamanhos = res;
    }, function (err) {
      return console.error(err);
    });

    $scope.selecionaCor = function (cor) {
      return $scope.corSelecionada = cor;
    };
    $scope.selecionaPreco = function (preco) {
      return $scope.precoSelecionado = preco;
    };
    $scope.selecionaTamanho = function (tamanho) {
      return $scope.tamanhoSelecionado = tamanho;
    };
    $scope.replaceValor = function (valor) {
      return valor.toFixed(2).replace(".", ",");
    };
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
  var ServicosModels = function ServicosModels(Cores, Tamanhos, Preco) {
    return {
      Cores: Cores,
      Tamanhos: Tamanhos,
      Preco: Preco
    };
  };

  app.factory("Model", ["Cores", "Tamanhos", "Preco", ServicosModels]);
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