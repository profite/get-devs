angular.module('profite')
       .factory('Produtos', function($http, config){

           function get(skip, success, error) {
               if(skip === 1) {
                   $http.get(config.apiUrl + "/produtos")
                        .success(function (res) {
                            success(res);
                        }).error(function (err) {
                       error(err);
                   });
               } else if(skip === 2) {
                   $http.get(config.apiUrl + "/mais-produtos")
                       .success(function (res) {
                           success(res);
                       }).error(function (err) {
                       error(err);
                   });
               }

               return {
                   get: get
               }
           }
       });