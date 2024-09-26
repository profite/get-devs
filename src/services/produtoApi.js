(function(){

	'use strict';
    
    angular
		.module('app')
		.factory('produtoApi', produtoApi);
		
	produtoApi.$inject = ['$http', '$q'];
		
	function produtoApi($http, $q) {
	
		const Zero_A_Cinquenta = 1;
		const Cinquenta_A_CentoECinquenta = 2;
		const CentoECinquenta_A_Trezentos = 3;
		const Trezentos_A_Quinhentos = 4;
		const Acima_De_Quinhentos = 5;

		var primeirosProdutos = [
			{
				id: 1, nome: 'bata bordada', dataCadastro: "01/03/2017", cor: 'Amarelo', Tamanho: 'G', FaixaPreço: Zero_A_Cinquenta,
				valorTotal: 398, title: 'Comprar Bata Bordada', imgSrc : './uploads/bata-bordada.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 2, nome: 'Moletom Estampa Diversos', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				de: 200, valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/blusa-feminina-manga-longa.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 3, nome: 'Moletom Estampa Diversos', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/body-feminino-renda.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 4, nome: 'Body Feminino Renda', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/body-listrado-off-white.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 5, nome: 'Blusa Feminina Manga Longa', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/moletom.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 6, nome: 'Body Listrado Boys Lie Off White', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/moletom-estampa.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			}
		];

		var todosProdutos = [
			{
				id: 1, nome: 'bata bordada', dataCadastro: "01/03/2017", cor: 'Amarelo', Tamanho: 'G', FaixaPreço: Zero_A_Cinquenta,
				valorTotal: 398, title: 'Comprar Bata Bordada', imgSrc : './uploads/moletom-estampa.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 2, nome: 'Moletom Estampa Diversos', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/moletom.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 3, nome: 'Moletom Estampa Diversos', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/bata-bordada.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 4, nome: 'Body Feminino Renda', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/body-listrado-off-white.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 5, nome: 'Blusa Feminina Manga Longa', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/body-feminino-renda.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 6, nome: 'Body Listrado "Boys Lie" Off White', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/blusa-feminina-manga-longa.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 7, nome: 'Body Feminino Renda', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/bata-bordada.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 8, nome: 'Blusa Feminina Manga Longa', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/moletom-estampa.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			},
			{
				id: 9, nome: 'Body Listrado "Boys Lie" Off White', dataCadastro: "20/04/2015", cor: 'Azul', Tamanho: 'G', FaixaPreço: Trezentos_A_Quinhentos,
				valorTotal: 150, title: 'Comprar Bata Bordada', imgSrc : './uploads/moletom.jpg',
				alt:'[Bata Bordada]', textoParecelas: 'até 5x de R$ 30,00'
			}
		];

		var service = {
			obterPrimeirosProdutos: obterPrimeirosProdutos,
			obterTodosProdutos: obterTodosProdutos
		};

		return service;

		////////////

		function obterPrimeirosProdutos() {
			return primeirosProdutos;
		}

		function obterTodosProdutos() {
			return todosProdutos;
		}	
	}	
    
}());