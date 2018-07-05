angular.module('profite', ['produtosDiretivas']);

var click = document.getElementsByClassName("checkbox");
// function someFunction(obj, abc) {
//     console.log(abc);
//     console.log(obj.getAttribute('class'));
// }

function codeReset() {
    document.getElementById("compra").style.display = "none";
}

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("compra").style.display = "block";
    document.getElementById("compra").innerHTML = clicks;
};