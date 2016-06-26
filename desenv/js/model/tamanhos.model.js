'use strict';
((app) => {

  let TamanhosService = ($q, $http) => {
    let def = $q.defer();
    let listaTamanhos = [];
    let getService = () => {
      if(listaTamanhos.length){
        def.resolve( listaTamanhos );
      }else{
        $http
          .get("data_db/tamanhos.json")
          .success((res) => {
            listaTamanhos = res;
            def.resolve(res);
          })
          .error((err) => {
            def.reject(err);
          });
      }
    };

    let get = () =>  def.promise;

    let find = busca => {
      listaTamanhos.map(item => item.id === busca.id);
    };

    getService();

    return {
      get: get,
      find: find
    }
  };

  app.factory("Tamanhos", ["$q", "$http", TamanhosService]);
})(app);
