((app) => {
  let CTRLService = (Filtro) =>{
      return {

        msgErro: (msg, scope, time) => {
          scope.mensagemErro = msg;
          time(() =>{
            scope.mensagemErro = null;
          }, 4000);
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

        filtro: ( scope, id ) => {
          Filtro.filtroCor( scope );
          Filtro.filtroTamanho( scope );
          Filtro.filtroPreco( scope );
          Filtro.ordenar( scope, id );
          Filtro.semFiltro( scope );
          Filtro.semResultado( scope );
        }

    }
  };

  app.factory("CTRLSupport", ["Filtro", CTRLService]);
})(app);
