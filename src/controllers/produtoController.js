(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('ProdutoController', ProdutoController);
		
	ProdutoController.$inject = ['$scope', 'produtoApi'];
		
	function ProdutoController($scope, produtoApi) { 
		
		const Zero_A_Cinquenta = 1;
		const Cinquenta_A_CentoECinquenta = 2;
		const CentoECinquenta_A_Trezentos = 3;
		const Trezentos_A_Quinhentos = 4;
		const Acima_De_Quinhentos = 5;

		$scope.filtroDataCadastro = "";

		$scope.carregarProdutos = function(){
            $scope.produtos = produtoApi.obterPrimeirosProdutos();
        };

        $scope.carregarProdutos();

       $scope.carregarMaisProdutos = function(){
       	 $scope.produtos = produtoApi.obterTodosProdutos();
       }
	
    }
	
}());