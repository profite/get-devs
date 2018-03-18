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