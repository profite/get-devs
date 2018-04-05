((app) => {
  let ProdutosModel = ($http) => {

    let get = (skip, success, error) => {
      $http.get("data_db/produtos_" + skip + ".json")
           .success( (res) => {success(res);} )
           .error( (err) => {error(err);} );
    };

    return {
      get: get
    }
  };
  app.factory("Produtos", ["$http", ProdutosModel]);
})(app);
