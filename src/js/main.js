var profiteDesafio = angular.module('profiteDesafio', []);

var objClicado = [];

function getClick() {
    objClicado.push(event.target.value);
    console.log("Click", objClicado);
    return objClicado;
}   

function clicado(){
    console.log("clicado", myOrderBy);
    
}