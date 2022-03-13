// Input de notas.
// var notasPrimeiroBi = parseFloat(prompt("Informe a Nota do Primeiro bimestre"));
// var notasSegundoBi = parseFloat(prompt("Informe a Nota do Segundo bimestre"));
// var notasTerceiroBi = parseFloat(prompt("Informe a Nota do Terceiro bimestre"));
// var notasQuartoBi = parseFloat(prompt("Informe a Nota do Quarto bimestre"));
// Calcula média
// var soma = (notasPrimeiroBi + notasSegundoBi + notasTerceiroBi + notasQuartoBi)/4;
// // Formata decimais
// var notaFinal = soma.toFixed(1);
// // Verificação aprovado ou não
// if(notaFinal > 6){
//     alert("Aprovado: "+notaFinal);
// }else{
//     alert("Reprovado : "+notaFinal)
// }
function Convert(){
    var value = parseFloat(document.getElementById("value").value);
    if(value == 1){
        var valueF = parseFloat(prompt("Informe o valor em Fahrenheit"));
        var valueC = ((valueF - 32)*5)/9;
        alert(valueC+"°F");
    }else if(value == 2){
        valueC = parseFloat(prompt("Informe o valor em Celcius"));
        valueF = ((valueC*5)/9)+32;
        alert(valueF+"°C");
    }else{
        alert("Informe um valor valido!")
    }
}