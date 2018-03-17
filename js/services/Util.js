angular.module('Profite')
       .factory('Util', function(Filtro, Collapse, MobileSupport, CTRLSupport){
           return {
               msgErro: function msgErro(msg, scope, time) {
                   CTRLSupport.msgErro(msg, scope, time);
               },

               trataClasseBtn: function trataClasseBtn(ocasiao) {
                   Collapse.trataClasseBtn(ocasiao);
               },

               collapse: function collapse(itensCollapseCor) {
                   Collapse.collapse(itensCollapseCor);
               },

               troggleColapse: function troggleColapse(scope, Util) {
                   Collapse.troggleColapse(scope, Util);
               },

               getProdutos: function getProdutos(skip, scope, Util, Model, time) {
                   CTRLSupport.getProdutos(skip, scope, Util, Model, time);
               },

               filtro: function filtro(scope, id) {
                   CTRLSupport.filtro(scope, id);
               },

               abreFiltroMobile: function abreFiltroMobile($event) {
                   MobileSupport.abreFiltroMobile($event);
               },

               fechaFiltroMobile: function fechaFiltroMobile($event) {
                   MobileSupport.fechaFiltroMobile($event);
               },

               troggleCategoriaFiltroMobile: function troggleCategoriaFiltroMobile($event) {
                   MobileSupport.troggleCategoriaFiltroMobile($event);
               },

               existsCompras: function existsCompras(model, scope) {
                   CTRLSupport.existCompras(model, scope);
               },

               carregaCarrinho: function carregaCarrinho(next, Util) {
                   CTRLSupport.carregaCarrinho(next, Util);
               },

               limpaFiltros: function limpaFiltros(scope, util) {
                   CTRLSupport.limpaFiltros(scope, util);
               },

               showBtnLimpa: function showBtnLimpa(scope) {
                   return CTRLSupport.showBtnLimpa(scope);
               }

           };
       });