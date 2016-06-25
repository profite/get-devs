'use strict';
((app) => {

  let PrecoService = ($q, $http) => {
    let def = $q.defer();
    let listaPreco = [];
    let getService = () => {
      if(listaPreco.length){
        def.resolve( listaPreco );
      }else{
        $http
          .get("data_db/faixa_preco.json")
          .success((res) => {
            listaPreco = res;
            def.resolve(res);
          })
          .error((err) => {
            def.reject(err);
          });
      }
    };

    let get = () =>  def.promise;

    let find = busca => {
      listaPreco.map(item => item.id === busca.id);
    };

    getService();

    return {
      get: get,
      find: find
    }
  };

  app.factory("Preco", ["$q", "$http", PrecoService]);
})(app);
