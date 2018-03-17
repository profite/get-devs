angular.module('profite')
    .factory('Tamanhos', function ($q, $http, config) {
        var def = $q.defer();
        var listaTamanhos = [];
        function getService() {
            if(listaTamanhos.length){
                def.resolve( listaTamanhos );
            }else{
                $http
                    .get(config.apiUrl + "/tamanhos")
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