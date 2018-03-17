angular.module('profite')
       .factory('Preco', function ($q, $http, config) {
           var def = $q.defer();
           var listaPreco = [];
           function getService() {
               if(listaTamanhos.length){
                   def.resolve( listaTamanhos );
               }else{
                   $http
                       .get(config.apiUrl + "/faixa-preco")
                       .success(function (res) {
                       listaTamanhos = res;
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
               listaTamanhos.map(function (item) {
                   return item.id === busca.id;
               });
           }

           getService();

           return {
               get: get,
               find: find
           }

       });