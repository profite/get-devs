angular.module('profite')
       .factory('MobileSupport', function () {
           return {

               abreFiltroMobile: function abreFiltroMobile($event) {
                   var box = angular.element($event.target.nextElementSibling);
                   box.addClass('open-filter');
               },

               fechaFiltroMobile: function fechaFiltroMobile($event) {
                   var box = angular.element($event.target.parentElement);
                   box.removeClass('open-filter');
               },

               troggleCategoriaFiltroMobile: function troggleCategoriaFiltroMobile($event) {
                   var lista = angular.element($event.target.nextElementSibling);
                   var span = angular.element($event.target.children);
                   if (lista.hasClass('abre-lista')) {
                       lista.removeClass('abre-lista');
                       span.text("+");
                   } else {
                       lista.addClass('abre-lista');
                       span.text("-");
                   }
               }

           };
       });