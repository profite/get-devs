"use strict";

var app = angular.module("appProfite", ['ngRoute']);

(function (app) {
   app.run(["$rootScope", function ($rootScope) {
      $rootScope.listaCompra = [];
   }]).config(["$compileProvider", function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
   }]).constant("OrdenarOpt", [{ id: 1, label: "Mais Recentes" }, { id: 2, label: "Menor Preço" }, { id: 3, label: "Maior Preço" }]);
})(app);

(function (app) {

   var configRoute = function configRoute($routeProvider) {
      $routeProvider.when('/home', {
         templateUrl: 'views/home.html',
         controller: 'homeController'
      }).when('/carrinho', {
         templateUrl: 'views/carrinho-compras.html',
         controller: 'carrinhoController'
      }).otherwise('/home');
   };

   app.config(["$routeProvider", configRoute]);
})(app);
"use strict";

(function (app) {
  var CarrinhoCTRL = function CarrinhoCTRL($scope, Carrinho) {
    $scope.ListaCompras = Carrinho.get();
    $scope.total = function () {
      var t = 0;
      for (var i in $scope.ListaCompras) {
        t += $scope.ListaCompras[i].pagamento.por;
      }
      return "R$ " + t.toFixed(2).replace(".", ",");
    };

    $scope.remove = function (item) {
      var confirma = confirm("Você deseja relamente retirar este produto do carrinho?");
      if (confirma) {
        Carrinho.remove(item);
        $scope.ListaCompras = Carrinho.get();
        $scope.$emit("ListaCompras");
      }
    };
  };

  app.controller('carrinhoController', ["$scope", "Carrinho", CarrinhoCTRL]);
})(app);

(function (app) {
  var HomeCTRL = function HomeCTRL($scope, $rootScope, OrdenarOpt, Model, $timeout, Util) {
    var itensCollapseCor = 5;
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
    $scope.mensagemErro = null;

    Model.Cores.get().then(function (res) {
      $scope.Cores = res;Util.collapse(itensCollapseCor);
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
      $scope.corSelecionada = cor;Util.filtro($scope);
    };
    $scope.selecionaPreco = function (preco) {
      $scope.precoSelecionado = preco;Util.filtro($scope);
    };
    $scope.selecionaTamanho = function (tamanho) {
      $scope.tamanhoSelecionado = tamanho;Util.filtro($scope);
    };
    $scope.replaceValor = function (valor) {
      return valor.toFixed(2).replace(".", ",");
    };
    $scope.addCarrinho = function (item) {
      item.produto.addCart = true;
      Model.Carrinho.set(item);
    };

    $scope.troggleColapse = function () {
      Util.troggleColapse($scope, Util);
    };

    $scope.carregarMaisProdutos = function () {
      Util.getProdutos($scope.pagina, $scope, Util, Model, $timeout);
    };

    $scope.ordenarChange = function (id) {
      $scope.ordenarTipo = id;
      Util.filtro($scope);
    };

    $scope.expandOptions = function ($event) {
      Util.abreFiltroMobile($event);
    };

    $scope.fecharFiltro = function ($event) {
      Util.fechaFiltroMobile($event);
    };

    $scope.troggleCategoriaFiltroMobile = function ($event) {
      Util.troggleCategoriaFiltroMobile($event);
    };

    $scope.carregarMaisProdutos();

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      Util.carregaCarrinho(next, Util);
    });

    $scope.showLimpaFiltros = function () {
      return Util.showBtnLimpa($scope);
    };

    $scope.limpaFiltros = function () {
      Util.limpaFiltros($scope, Util);
    };
  };

  app.controller('homeController', ["$scope", "$rootScope", "OrdenarOpt", "Model", "$timeout", "Util", HomeCTRL]);
})(app);

(function (app) {
  var MainCTRL = function MainCTRL($scope, Carrinho) {
    $scope.qtdCompra = 0;
    $scope.$on("ListaCompras", function () {
      $scope.qtdCompra = Carrinho.count();
    });
  };

  app.controller('mainController', ["$scope", "Carrinho", MainCTRL]);
})(app);
"use strict";

(function (app) {
  var UtilCollapse = function UtilCollapse() {
    return {

      trataClasseBtn: function trataClasseBtn(ocasiao) {
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
      },

      collapse: function collapse(itensCollapseCor) {
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
      },

      troggleColapse: function troggleColapse(scope, Util) {
        var lista = document.querySelectorAll(".colapse");
        for (var i = 0; i < lista.length; i++) {
          if (lista[i].className.indexOf("hide") < 0) {
            angular.element(lista[i]).addClass('hide');
            scope.txtExpandCores = "Ver todas as cores";
          } else if (lista[i].className.indexOf("hide") > 0) {
            var el = angular.element(lista[i]);
            el.removeClass('hide');
            scope.txtExpandCores = "Ocultar as cores";
          }
        }
        scope.coresOpen = !scope.coresOpen;
        Util.trataClasseBtn(scope.coresOpen);
      }

    };
  };

  app.factory("Collapse", UtilCollapse);
})(app);

(function (app) {
  var CTRLService = function CTRLService(Filtro) {
    var encontraProdutoAdionado = function encontraProdutoAdionado(atual, model) {
      for (var j in model.Carrinho.get()) {
        var item = model.Carrinho.get()[j];
        if (atual.produto.id === item.produto.id) {
          atual.produto.addCart = true;
        }
      }
    };
    return {

      msgErro: function msgErro(msg, scope, time) {
        scope.mensagemErro = msg;
        time(function () {
          scope.mensagemErro = null;
        }, 4000);
      },

      getProdutos: function getProdutos(skip, scope, Util, Model, time) {
        Model.Produtos.get(skip, function (res) {
          for (var i in res) {
            res[i].produto.addCart = false;
            scope.Produtos.push(res[i]);
            scope.produtosCopia.push(res[i]);
          }
          scope.pagina++;
          Util.filtro(scope);
          Util.existsCompras(Model, scope);
        }, function (err) {
          Util.msgErro("Não há mais produtos.", scope, time);
          console.error(err);
        });
      },

      filtro: function filtro(scope, id) {
        Filtro.filtroCor(scope);
        Filtro.filtroTamanho(scope);
        Filtro.filtroPreco(scope);
        Filtro.semResultado(scope);
        Filtro.ordenar(scope, id);
        Filtro.semFiltro(scope);
      },

      existCompras: function existCompras(model, scope) {
        if (model.Carrinho.count() > 0) {
          for (var i in scope.Produtos) {
            encontraProdutoAdionado(scope.Produtos[i], model);
          }
        }
      },

      carregaCarrinho: function carregaCarrinho(next, Util) {
        if (next.$$route.originalPath !== undefined) {
          var path = next.$$route.originalPath.replace("/", "");
          if (angular.equals(path, "home")) {
            Util.existsCompras(Model, $scope);
          }
        }
      },

      limpaFiltros: function limpaFiltros(scope, util) {
        scope.corSelecionada = { id: 0 };
        scope.precoSelecionado = { id: 0 };
        scope.tamanhoSelecionado = { id: 0 };
        scope.ordenarTipo = null;
        util.filtro(scope);
      },

      showBtnLimpa: function showBtnLimpa(scope) {
        return scope.corSelecionada.id > 0 || scope.precoSelecionado > 0 || scope.tamanhoSelecionado > 0 || scope.ordenarTipo > 0;
      }
    };
  };

  app.factory("CTRLSupport", ["Filtro", CTRLService]);
})(app);

(function (app) {
  var FiltroService = function FiltroService($interval) {
    return {

      filtroCor: function filtroCor(scope) {
        if (scope.corSelecionada.id > 0) {
          var temp = scope.precoSelecionado.id > 0 || scope.tamanhoSelecionado.id > 0 ? angular.copy(scope.Produtos) : angular.copy(scope.produtosCopia);
          scope.Produtos = [];
          for (var i in temp) {
            for (var j in temp[i].caracteristicas.cores) {
              if (temp[i].caracteristicas.cores[j] === scope.corSelecionada.id) {
                scope.Produtos.push(temp[i]);
                break;
              }
            }
          }
        }
      },

      filtroTamanho: function filtroTamanho(scope) {
        if (scope.tamanhoSelecionado.id > 0) {
          var temp = scope.precoSelecionado.id > 0 || scope.corSelecionada.id > 0 ? angular.copy(scope.Produtos) : angular.copy(scope.produtosCopia);
          scope.Produtos = [];
          for (var i in temp) {
            for (var j in temp[i].caracteristicas.tamanho) {
              if (temp[i].caracteristicas.tamanho[j] === scope.tamanhoSelecionado.id) {
                scope.Produtos.push(temp[i]);
                break;
              }
            }
          }
        }
      },

      filtroPreco: function filtroPreco(scope) {
        if (scope.precoSelecionado.id > 0) {
          var temp = scope.tamanhoSelecionado.id > 0 || scope.corSelecionada.id > 0 ? angular.copy(scope.Produtos) : angular.copy(scope.produtosCopia);
          scope.Produtos = [];
          for (var i in temp) {
            if (scope.precoSelecionado.to !== null) {

              if (temp[i].pagamento.por >= scope.precoSelecionado.from && temp[i].pagamento.por <= scope.precoSelecionado.to) {
                scope.Produtos.push(temp[i]);
              }
            } else if (scope.precoSelecionado.to === null) {

              if (temp[i].pagamento.por >= scope.precoSelecionado.from) {
                scope.Produtos.push(temp[i]);
              }
            }
          }
        }
      },

      semFiltro: function semFiltro(scope) {
        if (scope.precoSelecionado.id < 1 && scope.tamanhoSelecionado.id < 1 && scope.corSelecionada.id < 1) {
          scope.Produtos = angular.copy(scope.produtosCopia);
        }
      },

      ordenar: function ordenar(scopectrl) {
        if (scopectrl.ordenarTipo > 0) {
          switch (scopectrl.ordenarTipo) {
            case 1:
              scopectrl.Produtos.sort(function (a, b) {
                return new Date(a.produto.data) < new Date(b.produto.data);
              });
              scopectrl.$digest();
              break;
            case 2:
              scopectrl.Produtos.sort(function (a, b) {
                return a.pagamento.por > b.pagamento.por;
              });
              scopectrl.$digest();
              break;
            case 3:
              scopectrl.Produtos.sort(function (a, b) {
                return a.pagamento.por < b.pagamento.por;
              });
              scopectrl.$digest();
              break;
          }
        }
      },

      semResultado: function semResultado(scope) {
        if (scope.Produtos !== null && !scope.Produtos.length) {
          scope.Produtos = null;
        }
      }

    };
  };

  app.factory("Filtro", ["$interval", FiltroService]);
})(app);

(function (app) {
  var MobileService = function MobileService() {
    return {

      abreFiltroMobile: function abreFiltroMobile($event) {
        var box = angular.element($event.target.nextElementSibling);
        box.addClass('open-filter');
      },

      fechaFiltroMobile: function fechaFiltroMobile($event) {
        var box = angular.element($event.target.parentElement);
        box.removeClass('open-filter');
      },

      troggleCategoriaFiltroMobile: function troggleCategoriaFiltroMobile($event) {
        var lista = angular.element($event.target.nextElementSibling);
        var span = angular.element($event.target.children);
        if (lista.hasClass('abre-lista')) {
          lista.removeClass('abre-lista');
          span.text("+");
        } else {
          lista.addClass('abre-lista');
          span.text("-");
        }
      }

    };
  };

  app.factory("MobileSupport", MobileService);
})(app);

(function (app) {
  var UtilService = function UtilService(Filtro, Collapse, MobileSupport, CTRLSupport) {
    return {

      msgErro: function msgErro(msg, scope, time) {
        CTRLSupport.msgErro(msg, scope, time);
      },

      trataClasseBtn: function trataClasseBtn(ocasiao) {
        Collapse.trataClasseBtn(ocasiao);
      },

      collapse: function collapse(itensCollapseCor) {
        Collapse.collapse(itensCollapseCor);
      },

      troggleColapse: function troggleColapse(scope, Util) {
        Collapse.troggleColapse(scope, Util);
      },

      getProdutos: function getProdutos(skip, scope, Util, Model, time) {
        CTRLSupport.getProdutos(skip, scope, Util, Model, time);
      },

      filtro: function filtro(scope, id) {
        CTRLSupport.filtro(scope, id);
      },

      abreFiltroMobile: function abreFiltroMobile($event) {
        MobileSupport.abreFiltroMobile($event);
      },

      fechaFiltroMobile: function fechaFiltroMobile($event) {
        MobileSupport.fechaFiltroMobile($event);
      },

      troggleCategoriaFiltroMobile: function troggleCategoriaFiltroMobile($event) {
        MobileSupport.troggleCategoriaFiltroMobile($event);
      },

      existsCompras: function existsCompras(model, scope) {
        CTRLSupport.existCompras(model, scope);
      },

      carregaCarrinho: function carregaCarrinho(next, Util) {
        CTRLSupport.carregaCarrinho(next, Util);
      },

      limpaFiltros: function limpaFiltros(scope, util) {
        CTRLSupport.limpaFiltros(scope, util);
      },

      showBtnLimpa: function showBtnLimpa(scope) {
        return CTRLSupport.showBtnLimpa(scope);
      }

    };
  };

  app.factory("Util", ["Filtro", "Collapse", "MobileSupport", "CTRLSupport", UtilService]);
})(app);
"use strict";

(function (app) {
  var CarrinhoModel = function CarrinhoModel($rootScope) {
    var ListaCompra = [];

    var set = function set(item) {
      ListaCompra.push(item);
      $rootScope.$broadcast("ListaCompras");
    };
    var get = function get() {
      return ListaCompra;
    };
    var count = function count() {
      return ListaCompra.length;
    };

    var remove = function remove(item) {
      ListaCompra.splice(ListaCompra.indexOf(item), 1);
    };

    return {
      set: set,
      get: get,
      count: count,
      remove: remove
    };
  };

  app.factory("Carrinho", ["$rootScope", CarrinhoModel]);
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
  var ServicosModels = function ServicosModels(Cores, Tamanhos, Preco, Produtos, Carrinho) {
    return {
      Cores: Cores,
      Tamanhos: Tamanhos,
      Preco: Preco,
      Produtos: Produtos,
      Carrinho: Carrinho
    };
  };

  app.factory("Model", ["Cores", "Tamanhos", "Preco", "Produtos", "Carrinho", ServicosModels]);
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
  var ProdutosModel = function ProdutosModel($http) {

    var get = function get(skip, success, error) {
      $http.get("data_db/produtos_" + skip + ".json").success(function (res) {
        success(res);
      }).error(function (err) {
        error(err);
      });
    };

    return {
      get: get
    };
  };
  app.factory("Produtos", ["$http", ProdutosModel]);
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