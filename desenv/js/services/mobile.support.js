((app) => {
  let MobileService = () =>{
      return {

        abreFiltroMobile: ($event) => {
          let box = angular.element($event.target.nextElementSibling);
          box.addClass('open-filter');
        },

        fechaFiltroMobile: ($event) => {
          let box = angular.element($event.target.parentElement);
          box.removeClass('open-filter');
        },

        troggleCategoriaFiltroMobile: ($event) => {
          let lista = angular.element($event.target.nextElementSibling);
          let span =  angular.element($event.target.children);
          if(lista.hasClass('abre-lista')){
            lista.removeClass('abre-lista');
            span.text("+");
          }else{
            lista.addClass('abre-lista');
            span.text("-");
          }
        }

    }
  };

  app.factory("MobileSupport",  MobileService);
})(app);
