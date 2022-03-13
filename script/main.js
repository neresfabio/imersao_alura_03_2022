// Input de notas.
var notasPrimeiroBi = parseFloat(prompt("Informe a Nota do Primeiro bimestre"));
var notasSegundoBi = parseFloat(prompt("Informe a Nota do Segundo bimestre"));
var notasTerceiroBi = parseFloat(prompt("Informe a Nota do Terceiro bimestre"));
var notasQuartoBi = parseFloat(prompt("Informe a Nota do Quarto bimestre"));
// Calcula média
var soma = (notasPrimeiroBi + notasSegundoBi + notasTerceiroBi + notasQuartoBi)/4;
// Formata decimais
var notaFinal = soma.toFixed(1);
// Verificação aprovado ou não
if(notaFinal > 6){
    alert("Aprovado: "+notaFinal);
}else{
    alert("Reprovado : "+notaFinal)
}
