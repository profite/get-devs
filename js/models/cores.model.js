angular.module('profite')
       .factory('Cores', function ($q, $http, config) {
           var def = $q.defer();
           var listaCores = [];

           function getService() {
               if (listaCores.length) {
                   def.resolve(listaCores);
               } else {
                   $http
                       .get(config.apiUrl + "/cores")
                       .success(function (res) {
                           listaCores = res;
                           def.resolve(res);
                       }).error(function (err) {
                       listaCores = err;
                       def.resolve(err);
                   });
               }

           }

           function get() {
               def.promise;
           }

           function find(busca) {
               listaCores.map(function (item) {
                   return item.id === busca.id;
               });
           }

           getService();

           return {
               get: get,
               find: find
           }
       });