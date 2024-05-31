function NotaAv3() {
  var valorElemento = document.getElementById("nota1");
  var nota1 = valorElemento.value;
  var notaAv1 = parseFloat(nota1);
  
  var valorElemento2 = document.getElementById("nota2");
  var nota2 = valorElemento2.value;
  var notaAv2 = parseFloat(nota2);

  if (notaAv1 < 0 || notaAv1 > 10 || notaAv2 < 0 || notaAv2 > 10) {
    alert("Por favor, insira valores válidos para ambas as notas (0-10).");
    return;
  }

  if (!nota1 || !nota2) {
    alert("Por favor, insira valores válidos para ambas as notas.");
    return;
  }
  
  var media = 21 - (notaAv1 + notaAv2);

  if (media <= 10){
    var elementoNotaFinal = document.getElementById("notaFinal");
    var notaFinal = "A nota que você precisa tirar é: " + media.toFixed(2);
    elementoNotaFinal.innerHTML = notaFinal;
  } else {
    var elementoNotaFinal2 = document.getElementById("notaFinal");
    var notaFinal2 = "Mesmo tirando 10 você vai pra final";
    elementoNotaFinal2.innerHTML = notaFinal2;
  }
}
