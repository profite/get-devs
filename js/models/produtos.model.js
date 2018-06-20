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