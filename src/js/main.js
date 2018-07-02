angular.module('profite', ['produtosDiretivas']);

var click = document.getElementsByClassName("checkbox");

console.log("click", click);

function someFunction(obj,abc) {
    console.log(abc);
    console.log(obj.getAttribute('class'));   
}