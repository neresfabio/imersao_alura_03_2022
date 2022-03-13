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
var value = prompt("Escolha uma das opções: 1_Converter Farenheit para Celius; 2_Converter Celcius; 0_Para sair.")
switch(value)
{
    case value == null: 
        alert("O campo não pode está vazio! Atualize ou pressione \"F5\" em seu teclado");
        break;
    case value == "1":
        alert("Estou aqui");
        break;
    case value == "2":
        break;
    case value == "3":
        break;
    case value == "0":
        alert("Para voltar basta atualizar a página ou clique\"F5\" em seu teclado")
        break;
    default:
        alert("valor inválido Atualize a pagina ou clique\"F5\" em seu teclado");
}