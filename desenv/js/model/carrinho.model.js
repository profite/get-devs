((app) => {
  let CarrinhoModel = ($rootScope) =>{
    let ListaCompra = [];

    let set = (item) => {
      ListaCompra.push(item);
      $rootScope.$broadcast("ListaCompras");
    };
    let get = () => {
      return ListaCompra;
    };
    let count = () => {
      return ListaCompra.length;
    };

    return {
      set: set,
      get: get,
      count: count
    }
  };

  app.factory("Carrinho", ["$rootScope", CarrinhoModel])
})(app);
