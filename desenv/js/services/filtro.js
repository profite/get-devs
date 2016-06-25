((app) => {
  let FiltroService = () =>{
      return {

        filtroCor: (scope) => {
          if(scope.corSelecionada.id > 0){
            let temp = scope.precoSelecionado.id > 0 || scope.tamanhoSelecionado.id > 0 ?
                          angular.copy(scope.Produtos) :
                              angular.copy(scope.produtosCopia);
            scope.Produtos = [];
            for(let i in temp){
              for(let j in temp[i].caracteristicas.cores){
                if(temp[i].caracteristicas.cores[j] === scope.corSelecionada.id){
                  scope.Produtos.push(temp[i]);
                  break;
                }
              }
            }
          }
        },

        filtroTamanho: (scope) => {
          if(scope.tamanhoSelecionado.id > 0){
            let temp = scope.precoSelecionado.id > 0 || scope.corSelecionada.id > 0 ?
                          angular.copy(scope.Produtos) :
                              angular.copy(scope.produtosCopia);
            scope.Produtos = [];
            for(let i in temp){
              for(let j in temp[i].caracteristicas.tamanho){
                if(temp[i].caracteristicas.tamanho[j] === scope.tamanhoSelecionado.id){
                  scope.Produtos.push(temp[i]);
                  break;
                }
              }
            }
          }
        },

        filtroPreco: (scope) => {
          if(scope.precoSelecionado.id > 0){
            let temp = scope.tamanhoSelecionado.id > 0 || scope.corSelecionada.id > 0 ?
                          angular.copy(scope.Produtos) :
                              angular.copy(scope.produtosCopia);
            scope.Produtos = [];
            for(let i in temp){
              if(scope.precoSelecionado.to !== null){

                if(temp[i].pagamento.por >= scope.precoSelecionado.from &&
                    temp[i].pagamento.por <= scope.precoSelecionado.to){
                  scope.Produtos.push(temp[i]);
                }

              }else if(scope.precoSelecionado.to === null){

                if(temp[i].pagamento.por >= scope.precoSelecionado.from){
                  scope.Produtos.push(temp[i]);
                }

              }
            }
          }
        },

        semFiltro: (scope) => {
          if(scope.precoSelecionado.id < 1 && scope.tamanhoSelecionado.id < 1 && scope.corSelecionada.id < 1){
            scope.Produtos = angular.copy(scope.produtosCopia);
          }
        },

        ordenar: (scope) => {
            if(scope.ordenarTipo > 0){
              switch(scope.ordenarTipo){
                case 1:
                  scope.Produtos.sort( (a,b) => new Date(a.produto.data) < new Date(b.produto.data) );
                  scope.$apply();
                  break;
                case 2:
                  scope.Produtos.sort( (a,b) => a.pagamento.por > b.pagamento.por );
                  scope.$apply();
                  break;
                case 3:
                  scope.Produtos.sort( (a,b) => a.pagamento.por < b.pagamento.por );
                  scope.$apply();
                  break;
                default: break;
              }
            }
        }

    }
  };

  app.factory("Filtro", FiltroService);
})(app);
