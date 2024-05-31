function NotaFinal() {
  var valorElemento = document.getElementById("nota1");
  var nota1 = valorElemento.value;
  var notaAv1 = parseFloat(nota1);
  
  var valorElemento2 = document.getElementById("nota2");
  var nota2 = valorElemento2.value;
  var notaAv2 = parseFloat(nota2);
  
  var valorElemento3 = document.getElementById("nota3");
  var nota3 = valorElemento3.value;
  var notaAv3 = parseFloat(nota3);
  
  if (notaAv1 < 0 || notaAv1 > 10 || notaAv2 < 0 || notaAv2 > 10 || notaAv3 < 0 || notaAv3 > 10) {
    alert("Por favor, insira valores válidos para todas as notas (0-10).");
    return;
  }

  if (!nota1 || !nota2 || !nota3) {
    alert("Por favor, insira valores válidos para todas as notas.");
    return;
  }
  
  var media = (notaAv1 + notaAv2 + notaAv3) / 3;

  var notaNecessaria;
  
  if (media >= 7){
    var elementoNotaFinal = document.getElementById("notaFinal");
    var notaFinal = "Você está aprovado por média.";
    elementoNotaFinal.innerHTML = notaFinal;
  } else {
    notaNecessaria = 21 - (notaAv1 + notaAv2);
    var elementoNotaFinal = document.getElementById("notaFinal");
    var notaFinal = "A nota que você precisa tirar é: " + notaNecessaria.toFixed(2);
    elementoNotaFinal.innerHTML = notaFinal;
  }
}