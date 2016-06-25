((app) => {
  let UtilService = () =>{
      return {

        msgErro: (msg, scope, time) => {
          scope.mensagemErro = msg;
          time(() =>{
            scope.mensagemErro = null;
          }, 4000);
        },

        trataClasseBtn: (ocasiao) => {
            let bt = document.querySelector("#btnCores");
            let seta = bt.querySelector('.arrow');
            let classeSeta = seta.className;
            if(!ocasiao){
              classeSeta = classeSeta.split(" ");
              classeSeta.splice(1, classeSeta.indexOf('open'));
              seta.className =  classeSeta.join(" ");
            }else{
              seta.className += " open";
            }
        },

        collapse: (itensCollapseCor) => {
          let boxcores = document.querySelector("#lista-cores");
          angular.element(boxcores).ready(function() {
              let listaCores = boxcores.querySelectorAll("li");
              if(listaCores.length){
                for(let i = 0; i < listaCores.length; i++){
                  if(i > itensCollapseCor && listaCores[i].className.indexOf("colapse") < 0){
                    angular.element(listaCores[i]).addClass('colapse hide');
                  }
                }
              }
          });
        },

        troggleColapse: (scope, Util) => {
          let lista = document.querySelectorAll(".colapse");
            for(let i = 0; i < lista.length; i++){
              if(lista[i].className.indexOf("hide") < 0){
                angular.element(lista[i]).addClass('hide');
                scope.txtExpandCores = "Ver todas as cores";
              }else if(lista[i].className.indexOf("hide") > 0){
                let el = angular.element(lista[i]);
                el.removeClass('hide');
                scope.txtExpandCores = "Ocultar as cores";
              }
            }
            scope.coresOpen = !scope.coresOpen;
            Util.trataClasseBtn( scope.coresOpen );
        },

        getProdutos: (skip, scope, Util, Model, time) => {
          Model.Produtos.get(skip, res => {
            for(let i in res){
              res[i].produto.addCart = false;
              scope.Produtos.push(res[i]);
              scope.produtosCopia.push(res[i]);
            }
            scope.pagina++;
            Util.filtro(Util, scope);
          }, err => {
            Util.msgErro("Não há mais produtos.", scope, time);
            console.error(err);
          });
        },

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

        ordenar: (scope, Util) => {
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
        },

        filtro: (Util, $scope) => {
          Util.filtroCor( $scope );
          Util.filtroTamanho( $scope );
          Util.filtroPreco( $scope );
          Util.ordenar( $scope )
          Util.semFiltro( $scope );
        }

    }
  };

  app.factory("Util", UtilService);
})(app);
