angular.module('Profite')
       .factory('Collapse', function () {
           return {
               trataClasseBtn: function trataClasseBtn(ocasiao) {
                   var bt = document.querySelector("#btnCores");
                   var seta = bt.querySelector('.arrow');
                   var classeSeta = seta.className;
                   if (!ocasiao) {
                       classeSeta = classeSeta.split(" ");
                       classeSeta.splice(1, classeSeta.indexOf('open'));
                       seta.className = classeSeta.join(" ");
                   } else {
                       seta.className += " open";
                   }
               },

               collapse: function collapse(itensCollapseCor) {
                   var boxcores = document.querySelector("#lista-cores");
                   angular.element(boxcores).ready(function () {
                       var listaCores = boxcores.querySelectorAll("li");
                       if (listaCores.length) {
                           for (var i = 0; i < listaCores.length; i++) {
                               if (i > itensCollapseCor && listaCores[i].className.indexOf("corextra") < 0) {
                                   angular.element(listaCores[i]).addClass('corextra hide');
                               }
                           }
                       }
                   });
               },

               troggleColapse: function troggleColapse(scope, Util) {
                   var lista = document.querySelectorAll(".corextra");
                   for (var i = 0; i < lista.length; i++) {
                       if (lista[i].className.indexOf("hide") < 0) {
                           angular.element(lista[i]).addClass('hide');
                           scope.txtExpandCores = "Ver todas as cores";
                       } else if (lista[i].className.indexOf("hide") > 0) {
                           var el = angular.element(lista[i]);
                           el.removeClass('hide');
                           scope.txtExpandCores = "Ocultar as cores";
                       }
                   }
                   scope.coresOpen = !scope.coresOpen;
                   Util.trataClasseBtn(scope.coresOpen);
               }

           };
       });