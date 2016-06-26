((app) => {
  let CTRLService = (Filtro) =>{
    let encontraProdutoAdionado = (atual, model) => {
      for(let j in model.Carrinho.get()){
        let item = model.Carrinho.get()[j];
        if(atual.produto.id === item.produto.id){
          atual.produto.addCart = true;
        }
      }
    }
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
            Util.existsCompras(Model, scope);
          }, err => {
            Util.msgErro("Não há mais produtos.", scope, time);
            console.error(err);
          });
        },

        filtro: ( scope, id ) => {
          Filtro.filtroCor( scope );
          Filtro.filtroTamanho( scope );
          Filtro.filtroPreco( scope );
          Filtro.semResultado( scope );
          Filtro.ordenar( scope, id );
          Filtro.semFiltro( scope );
        },

        existCompras: (model, scope) => {
          if(model.Carrinho.count() > 0){
            for(let i in scope.Produtos){
              encontraProdutoAdionado(scope.Produtos[i], model)
            }
          }
        }

    }
  };

  app.factory("CTRLSupport", ["Filtro", CTRLService]);
})(app);
