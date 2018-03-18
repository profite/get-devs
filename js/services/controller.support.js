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