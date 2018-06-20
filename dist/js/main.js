var app = angular.module('profite', ['ngRoute']);
        app.run(['$rootScope', function ($rootScope) {
            $rootScope.listaCompra = [];
        }]);
        app.config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }]);
        app.constant('OrdenarOpt', [
            {id: 1, label: "Mais Recentes"},
            {id: 2, label: "Menor Preço"},
            {id: 3, label: "Maior Preço"}
        ]);
angular
        .module('profite')
        .config(routeConfig);

    function routeConfig($routeProvider, $locationProvider){

        $locationProvider.hashPrefix("");

        $routeProvider.when('/home', {
            templateUrl: 'view/home.html',
            controller: 'homeCtrl'
        });
        $routeProvider.when('/carrinho', {
            templateUrl: 'view/carrinho.html',
            controller: 'carrinhoCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
    }
angular.module('profite')
       .controller('carrinhoCtrl', function ($scope, Carrinho) {
           $scope.ListaCompras = Carrinho.get();

           $scope.total = function () {
               var t = 0;
               for(var i in $scope.ListaCompras){
                   t += $scope.ListaCompras[i].pagamento.por;
               }
               return "R$ " + t.toFixed(2).replace(".", ",");
           };

           $scope.remove = function (item) {
             Carrinho.remove(item);
             $scope.ListaCompras = Carrinho.get();
             $scope.$emit('ListaCompras');
           };
       });
angular.module('profite')
       .controller('homeCtrl', function ($http, $scope, $rootScope, OrdenarOpt, Model, $timeout, Util, config) {
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
               $scope.Cores = res.data;
               Util.collapse(itensCollapseCor);
           }, function (err) {
               alert(err);
           });

           Model.Produtos.get($scope.pagina,$scope).then(function (value) {
               $scope.Produtos = value.data;
           }, function (reason) {
               console.log(reason);
           });

           Model.Preco.get().then(function (res) {
               $scope.Precos = res.data;
           }, function (reason) {
               console.log(reason);
           });
           Model.Tamanhos.get().then(function (res) {
               $scope.Tamanhos = res.data;
           }, function (err) {
               console.error(err);
           });

           $scope.selecionaCor = function (cor) {
               $scope.corSelecionada = cor;
               Util.filtro($scope);
           };
           $scope.selecionaPreco = function (preco) {
               $scope.precoSelecionado = preco;
               Util.filtro($scope);
           };
           $scope.selecionaTamanho = function (tamanho) {
               $scope.tamanhoSelecionado = tamanho;
               Util.filtro($scope);
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
               Model.Produtos.get(2,$scope).then(function (value) {
                   $scope.Produtos = value.data;
               }, function (reason) {
                   console.log(reason);
               });
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

           // $scope.carregarMaisProdutos();

           $rootScope.$on('$routeChangeStart', function (event, next, current) {
               Util.carregaCarrinho(next, Util);
           });

           $scope.showLimpaFiltros = function () {
               return Util.showBtnLimpa($scope);
           };

           $scope.limpaFiltros = function () {
               Util.limpaFiltros($scope, Util);
           };
       });
angular.module('profite')
       .controller('mainCtrl', function ($scope, $routeParams, Carrinho) {
            $scope.qtdCompra = 0;
            $scope.$on('ListaCompras', function () {
                $scope.qtdCompra = Carrinho.count();
            });
       });
angular.module('profite')
       .factory('Carrinho', function ($rootScope) {
          var ListaCompra = [];

          function set(item) {
              ListaCompra.push(item);
              $rootScope.$broadcast('ListaCompras');
          }

          function get() {
              return ListaCompra;
          }

          function count() {
              return ListaCompra.length;
          }

          function remove(item) {
              ListaCompra.splice(ListaCompra.indexOf(item), 1);
          }

          return {
              set: set,
              get: get,
              count: count,
              remove: remove
          }
       });
angular.module('profite')
       .factory('Cores', function ($q, $http, config) {

           function get() {
               return $http.get(config.apiUrl + "/cores");
           }
           //
           // function find(busca) {
           //     listaCores.map(function (item) {
           //         return item.id === busca.id;
           //     });
           // }
           //
           // getService();

           return {
               get: get
               // find: find
           }
       });
angular.module('profite')
       .factory('Model', function (Cores, Tamanhos, Preco, Produtos, Carrinho) {
           return {
               Cores: Cores,
               Tamanhos: Tamanhos,
               Preco: Preco,
               Produtos: Produtos,
               Carrinho: Carrinho
           }
       });
angular.module('profite')
       .factory('Preco', function ($http, config) {

           function get() {
               return $http.get(config.apiUrl + '/faixa-preco');
           }

           // function find(busca) {
           //     listaPreco.map(function (item) {
           //         return item.id === busca.id;
           //     });
           // }

           return {
               get: get
               // find: find
           }

       });
angular.module('profite')
       .factory('Produtos', function($http, config){

           function get(skip, scope) {
               if(skip === 1) {
                   return $http.get(config.apiUrl + "/produtos");
                   scope.pagina++;
               } else if(skip === 2) {
                  return $http.get(config.apiUrl + "/mais-produtos");
               }

           }

           return {
               get: get
           }
       });
angular.module('profite')
    .factory('Tamanhos', function ($q, $http, config) {

        function get() {
            return $http.get(config.apiUrl + '/tamanhos');
        }

        // function find(busca) {
        //     listaTamanhos.map(function (item) {
        //         return item.id === busca.id;
        //     });
        // }

        return {
            get: get
            // find: find
        }

    });
angular.module('profite')
       .factory('Util', function(Filtro, Collapse, MobileSupport, CTRLSupport){
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

               // getProdutos: function getProdutos(skip, scope, Util, Model, time) {
               //     CTRLSupport.getProdutos(skip, scope, Util, Model, time);
               // },

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
       });
angular.module('profite')
       .factory('Collapse', function () {
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
                               if (i > itensCollapseCor && listaCores[i].className.indexOf("corextra") < 0) {
                                   angular.element(listaCores[i]).addClass('corextra hide');
                               }
                           }
                       }
                   });
               },

               troggleColapse: function troggleColapse(scope, Util) {
                   var lista = document.querySelectorAll(".corextra");
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
       });
angular.module('profite')
       .factory('CTRLSupport', function (Filtro) {
           var encontraProdutoAdicionado = function encontraProdutoAdicionado(atual, model) {
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

               // getProdutos: function getProdutos(skip, scope, Util, Model, time) {
               //     Model.Produtos.get(skip).then( function (res) {
               //         for (var i in res) {
               //             res[i].produto.addCart = false;
               //             scope.Produtos.push(res[i]);
               //             scope.produtosCopia.push(res[i]);
               //         }
               //         scope.pagina++;
               //         Util.filtro(scope);
               //         Util.existsCompras(Model, scope);
               //     }, function (err) {
               //         Util.msgErro("Não há mais produtos.", scope, time);
               //         console.error(err);
               //     });
               // },

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
                           encontraProdutoAdicionado(scope.Produtos[i], model);
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
                   return scope.corSelecionada.id > 0 || scope.precoSelecionado.id > 0 || scope.tamanhoSelecionado.id > 0 || scope.ordenarTipo > 0;
               }
           };
       });
angular.module('profite')
       .factory('Filtro', function ($interval) {
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
       });
angular.module('profite')
       .factory('MobileSupport', function () {
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
       });
angular.module('profite')
       .value('config', {
          apiUrl: "https://private-4586c-profite.apiary-mock.com"
       });