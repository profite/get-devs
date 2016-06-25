'use strict';
((app) => {

  let CoresService = ($q, $http) => {
    let def = $q.defer();
    let listaCores = [];
    let getService = () => {
      if(listaCores.length){
        def.resolve( listaCores );
      }else{
        $http
          .get("data_db/cores.json")
          .success((res) => {
            listaCores = res;
            def.resolve(res);
          })
          .error((err) => {
            def.reject(err);
          });
      }
    };

    let get = () =>  def.promise;

    let find = busca => {
      listaCores.map(item => item.id === busca.id);
    };

    getService();

    return {
      get: get,
      find: find
    }
  };

  app.factory("Cores", ["$q", "$http", CoresService]);
})(app);
