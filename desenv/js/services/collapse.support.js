((app) => {
  let UtilCollapse = () =>{
      return {

        trataClasseBtn: (ocasiao) => {
            let bt = document.querySelector("#btnCores");
            let seta = bt.querySelector('.arrow');
            let classeSeta = seta.className;
            if(!ocasiao){
              classeSeta = classeSeta.split(" ");
              classeSeta.splice(1, classeSeta.indexOf('open'));
              seta.className =  classeSeta.join(" ");
            }else{
              seta.className += " open";
            }
        },

        collapse: (itensCollapseCor) => {
          let boxcores = document.querySelector("#lista-cores");
          angular.element(boxcores).ready(function() {
              let listaCores = boxcores.querySelectorAll("li");
              if(listaCores.length){
                for(let i = 0; i < listaCores.length; i++){
                  if(i > itensCollapseCor && listaCores[i].className.indexOf("corextra") < 0){
                    angular.element(listaCores[i]).addClass('corextra hide'); 
                  }
                }
              }
          });
        },

        troggleColapse: (scope, Util) => {
          let lista = document.querySelectorAll(".corextra");
            for(let i = 0; i < lista.length; i++){
              if(lista[i].className.indexOf("hide") < 0){
                angular.element(lista[i]).addClass('hide');
                scope.txtExpandCores = "Ver todas as cores";
              }else if(lista[i].className.indexOf("hide") > 0){
                let el = angular.element(lista[i]);
                el.removeClass('hide');
                scope.txtExpandCores = "Ocultar as cores";
              }
            }
            scope.coresOpen = !scope.coresOpen;
            Util.trataClasseBtn( scope.coresOpen );
        }

    }
  };

  app.factory("Collapse", UtilCollapse);
})(app);
