angular.module('profite')
       .factory('Preco', function ($q, $http, config) {
           var def = $q.defer();
           var listaPreco = [];
           function getService() {
               if(listaPreco.length){
                   def.resolve( listaPreco );
               }else{
                   $http
                       .get(config.apiUrl + "/faixa-preco")
                       .success(function (res) {
                       listaPreco = res;
                   def.resolve(res);
               })
               .error(function (err) {
                       def.reject(err);
               });
               }
           }

           function get() {
               def.promise;
           }

           function find(busca) {
               listaPreco.map(function (item) {
                   return item.id === busca.id;
               });
           }

           getService();

           return {
               get: get,
               find: find
           }

       });