var inputArea = document.querySelector(".input-text");
var outputArea = document.querySelector(".output-text");

var btnCripto = document.querySelector(".btn-criptografar");
var btnDescripto = document.querySelector(".btn-descriptografar");
var btnCopiar = document.querySelector(".btn-copiar");

var resultado = "";


inputArea.addEventListener("input", function () {
    var texto = inputArea.value.toLowerCase().replace(/[^a-z 0-9\s]/g, "");
    inputArea.value = texto

});

function criptografar() {

    if (inputArea.value != "") {
        document.querySelector(".resposta").style.display = "block"
        document.querySelector(".mensagem-nao-encontrada").style.display = "none"


        resultado = inputArea.value;

        resultado = resultado
            .replace(/a/g, "ai")
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        outputArea.innerHTML = resultado;

        inputArea.value = "";

    } else {
        alert("Digite a mensagem que quer criptografar!")
    }
};

function descriptografar() {
    if (inputArea.value != "") {
        document.querySelector(".resposta").style.display = "block"
        document.querySelector(".mensagem-nao-encontrada").style.display = "none"


        resultado = inputArea.value;

        resultado = resultado
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        outputArea.innerHTML = resultado;

        inputArea.value = "";

    } else {
        alert("Digite a mensagem que quer descriptografar!")

    }
};

function copiar() {
    navigator.clipboard.writeText(resultado);

}