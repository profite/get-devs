angular.module('produtosDiretivas', [])
    .directive('produtoCaixa', function () {

        var ddo = {

        }

        ddo.restric = "AE"; // Elemento e Tag

        ddo.scope = {
            nome: '@',
            url: '@',
            fototitulo: '@',
            valor: '@',
            valorprestacao: '@',
            prestacao: '@'
        }

        ddo.transclude = true;

        ddo.templateUrl = 'produtos-diretivas.html';

        return ddo;
    });