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