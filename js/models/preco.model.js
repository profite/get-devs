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