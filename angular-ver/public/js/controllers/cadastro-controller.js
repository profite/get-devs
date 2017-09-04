angular.module('geekiebooks')
    .controller('CadastroController', function ($scope, $http) {

        $scope.livro = {};
        /* variaveis */

        $scope.submeter = function () {
            $http.post('/v1/livros', $scope.livro)
                .success(function () {
                    console.log("Livro cadastrado com sucesso")
                })
                .error(function (erro) {
                    console.log(erro)
                })
        };
    });
