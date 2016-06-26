((app) => {
  let UtilService = (Filtro, Collapse, MobileSupport, CTRLSupport) =>{
      return {

        msgErro: (msg, scope, time) => {
          CTRLSupport.msgErro(msg, scope, time);
        },

        trataClasseBtn: (ocasiao) => {
          Collapse.trataClasseBtn(ocasiao);
        },

        collapse: (itensCollapseCor) => {
          Collapse.collapse(itensCollapseCor);
        },

        troggleColapse: (scope, Util) => {
          Collapse.troggleColapse(scope, Util);
        },

        getProdutos: (skip, scope, Util, Model, time) => {
          CTRLSupport.getProdutos(skip, scope, Util, Model, time);
        },

        filtro: ( scope, id ) => {
          CTRLSupport.filtro( scope, id );
        },

        abreFiltroMobile: ($event) => {
          MobileSupport.abreFiltroMobile($event);
        },

        fechaFiltroMobile: ($event) => {
          MobileSupport.fechaFiltroMobile($event);
        },

        troggleCategoriaFiltroMobile: ($event) => {
          MobileSupport.troggleCategoriaFiltroMobile($event);
        },

        existsCompras: (model, scope) => {
          CTRLSupport.existCompras(model, scope);
        }

    }
  };

  app.factory("Util", ["Filtro", "Collapse", "MobileSupport", "CTRLSupport", UtilService]);
})(app);
