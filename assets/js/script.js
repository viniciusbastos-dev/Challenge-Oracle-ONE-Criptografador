var inputArea = document.querySelector(".input__area");
var outputArea = document.querySelector(".output__area");

var btnCripto = document.querySelector(".criptografar");
var btnDescripto = document.querySelector(".descriptografar");
var btnCopiar = document.querySelector(".copiar");

var resultado = "";

inputArea.addEventListener("input", function () {
  var texto = inputArea.value.toLowerCase().replace(/[^a-z 0-9\s]/g, "");
  inputArea.value = texto;
});

function exibeResposta() {
  document.querySelector(".result").style.display = "block";
  document.querySelector(".not__found").style.display = "none";
}

function criptografar() {
  if (inputArea.value != "") {
    exibeResposta();

    resultado = inputArea.value;

    resultado = resultado
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    outputArea.innerHTML = resultado;

   /*  inputArea.value = ""; */
  } else {
    alert("Digite a mensagem que quer criptografar!");
  }
}

function descriptografar() {
  if (inputArea.value != "") {
    exibeResposta();

    resultado = inputArea.value;

    resultado = resultado
      .replace(/enter/g, "e")
      .replace(/ai/g, "a")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    outputArea.innerHTML = resultado;

    /* inputArea.value = ""; */
  } else {
    alert("Digite a mensagem que quer descriptografar!");
  }
}

function copiar() {
  navigator.clipboard.writeText(resultado);
}

btnCripto.onclick = criptografar;
btnDescripto.onclick = descriptografar;
btnCopiar.onclick = copiar;
