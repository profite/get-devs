$(document).ready(function () {
    $.getJSON("https://raw.githubusercontent.com/aldiransantos/resume/master/js/produtos.json", function (data) {
        event.preventDefault();

        for (var i = 0; i < data.length; i++) {
            var produtoTr = document.createElement("tr");

            var nomeTd = document.createElement("td");
            var valorTd = document.createElement("td");
            var divididoTd = document.createElement("td");

            nomeTd.textContent = data[i].nome;
            valorTd.textContent = data[i].valor;
            divididoTd.textContent = data[i].dividido;

            produtoTr.appendChild(nomeTd);
            produtoTr.appendChild(valorTd);
            produtoTr.appendChild(divididoTd);

            // var tabela = document.getElementById("tabelaExemplo");
            // tabela.appendChild(produtoTr);

            // Realizado teste para pegar informações a partir do JSON, porém as imagens não apareciam
        }
    });
});

var compras = 0;
function nCompras() {
    compras += 1;
    document.getElementById("nProdutos").innerHTML = compras;
    document.getElementById("nProdutos").style.display = "block";
}