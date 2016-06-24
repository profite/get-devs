((app) => {
  let ProdutosModel = ($q, $http) => {
    let def = $q.defer();
    let listaProdutos = [];

    let get = (skip) => {
      if(listaProdutos.length){
        def.resolve(listaProdutos);
      }else {
        $http.get("data_db/produtos_" + skip + ".json")
             .success( (res) => {def.resolve(res);} )
             .error( (err) => {def.reject(err);} );
      }
      return def.promise;
    }
    return {
      get: get
    }
  };
  app.factory("Produtos", ["$q", "$http", ProdutosModel]);
})(app);
