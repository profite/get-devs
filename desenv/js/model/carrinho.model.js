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

    let remove = (item) => {
      ListaCompra.splice(ListaCompra.indexOf(item), 1);
    };

    return {
      set: set,
      get: get,
      count: count,
      remove: remove
    }
  };

  app.factory("Carrinho", ["$rootScope", CarrinhoModel])
})(app);
