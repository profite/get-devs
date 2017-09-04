/*Sempre verificar se os outros dois controllers receberam as devidas alterações*/
angular.module('geekiebooks')
    .controller('FiltroFantasiaController', function ($scope, $http) {

        $scope.livros = [];
        $scope.contagem = 0
        $scope.quantidade = $scope.contagem;
        /* variaveis */

        $http.get('/v1/fantasia')
            .success(function (livros) {
                $scope.livros = livros;
            }).error(function (error) {
                console.log(error);
            })
        /* requisições pra listar os livros e generos */

        $scope.ordenarPor = function (campo) {
            $scope.ordemDeValor = campo;
        }

        $scope.limite = 3;

        $scope.adiciona = function (limite) {
            extra = $scope.limite + 3;
            $scope.limite = extra;
        }

        $scope.soma = function (livro) {
            $scope.quantidade = ++$scope.contagem;
            $scope.lista.push(livro);
            $http.post('/v1/carrinho', $scope.lista)
                .success(function () {
                    console.log("Livro cadastrado com sucesso")
                })
                .error(function (erro) {
                    console.log(erro)
                })
        };
        /* filtros */
    });
