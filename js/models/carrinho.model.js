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