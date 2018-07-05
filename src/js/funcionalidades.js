
function codeReset() {
    document.getElementById("compra").style.display = "none";
}

angular.module('profite', ['produtosDiretivas']);

var click = document.getElementsByClassName("checkbox");
var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("compra").style.display = "block";
    document.getElementById("compra").innerHTML = clicks;
};
