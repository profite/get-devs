angular.module('profite')
    .factory('Tamanhos', function ($q, $http, config) {

        function get() {
            return $http.get(config.apiUrl + '/tamanhos');
        }

        // function find(busca) {
        //     listaTamanhos.map(function (item) {
        //         return item.id === busca.id;
        //     });
        // }

        return {
            get: get
            // find: find
        }

    });