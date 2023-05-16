var inputArea = document.querySelector(".input-area");
var outputArea = document.querySelector(".output-area");

var btnCripto = document.querySelector(".btn-criptografar");
var btnDescripto = document.querySelector(".btn-descriptografar");
var btnCopiar = document.querySelector(".btn-copiar");

var resultado = "";


inputArea.addEventListener("input", function () {
    var texto = inputArea.value.toLowerCase().replace(/[^a-z 0-9\s]/g, "");
    inputArea.value = texto

});

function exibeResposta() {
    document.querySelector(".output-wrapper").style.display = "flex"
    document.querySelector(".not-found").style.display = "none"
}

function criptografar() {

    if (inputArea.value != "") {
        exibeResposta();

        resultado = inputArea.value;

        resultado = resultado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        outputArea.innerHTML = resultado;

        inputArea.value = "";

    } else {
        alert("Digite a mensagem que quer criptografar!")
    }
};

function descriptografar() {
    if (inputArea.value != "") {
        exibeResposta();

        resultado = inputArea.value;

        resultado = resultado.replace(/enter/g, "e").replace(/ai/g, "a").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

        outputArea.innerHTML = resultado;

        inputArea.value = "";

    } else {
        alert("Digite a mensagem que quer descriptografar!")

    }
};

function copiar() {
    navigator.clipboard.writeText(resultado);

}