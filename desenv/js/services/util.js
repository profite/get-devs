((app) => {
  let UtilService = (Filtro, Collapse) =>{
      return {

        msgErro: (msg, scope, time) => {
          scope.mensagemErro = msg;
          time(() =>{
            scope.mensagemErro = null;
          }, 4000);
        },

        trataClasseBtn: (ocasiao) => {
          Collapse.trataClasseBtn(ocasiao);
        },

        collapse: (itensCollapseCor) => {
          Collapse.collapse(itensCollapseCor);
        },

        troggleColapse: (scope, Util) => {
          Collapse.troggleColapse(scope, Util);
        },

        getProdutos: (skip, scope, Util, Model, time) => {
          Model.Produtos.get(skip, res => {
            for(let i in res){
              res[i].produto.addCart = false;
              scope.Produtos.push(res[i]);
              scope.produtosCopia.push(res[i]);
            }
            scope.pagina++;
            Util.filtro(scope);
          }, err => {
            Util.msgErro("Não há mais produtos.", scope, time);
            console.error(err);
          });
        },

        filtro: ( scope ) => {
          Filtro.filtroCor( scope );
          Filtro.filtroTamanho( scope );
          Filtro.filtroPreco( scope );
          Filtro.ordenar( scope )
          Filtro.semFiltro( scope );
        }

    }
  };

  app.factory("Util", ["Filtro", "Collapse", UtilService]);
})(app);
