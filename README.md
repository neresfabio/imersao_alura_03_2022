# Imerssão DEV Alura

> O código da aula inicial da Alura está aqui:

[https://codepen.io/imersao-dev/pen/38cf7906dcec352d8dbd0f8c4c7c1b10](https://codepen.io/imersao-dev/pen/38cf7906dcec352d8dbd0f8c4c7c1b10)

> Faça o fork do projeto para a sua conta e marque as hashtags #imersaodev, imersaodev4 e #alura.

### Como compartilhar seu CodePen

- Clique na opção Settings no canto superior direito;
- Selecione a opção Pen Details (Detalhes);
- No campo Pen Title você pode dar o nome do seu projeto;
- No campo Pen Description, você pode dar detalhes sobre o projeto (o que ele faz, qual objetivo do projeto);
- Para compartilhar seu projeto, no campo Tags, você pode adicionar #imersaodev e #alura
  Agora só salvar seu projeto e compartilhar o link marcando a Alura nas redes sociais!

## Aula 01

> # Variavéis, operções e média.

Nesta primeira aula da Imersão Dev, criamos uma calculadora de média e aprendemos o que são variáveis e como realizar operações.

Neste programa, focamos nas primeiras ferramentas principais de qualquer linguagem de programação: variáveis, operadores, arredondamento e console.

### Conteúdo detalhado desta aula

- [x] Criar uma conta no CodePen;

- [x] Entender as diferenças entre HTML, CSS e JavaScript;

- [x] Variáveis, manipulação dos valores armazenados e a memória do computador;

- [x] Tipos de variáveis, como texto e inteiro;

- [x] Fixando a quantidade de casas decimais com a função `.toFixed()`;

### Desafios desta aula!

- [x] Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não

- Input de notas.

Usando o método `prompt` e `parseFloat`:

**prompt**: exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto.

**parseFloat**: O método converte a string recebida como argumento e a retorna como um número de ponto flutuante. Este método se comporta de maneira idêntica a da função global parseFloat e é parte da especificação ECMAScript 6 (seu propósito é a modularização dos objetos globais).

```
// Input de notas.
var notasPrimeiroBi = parseFloat(prompt("Informe a Nota do Primeiro bimestre"));
var notasSegundoBi = parseFloat(prompt("Informe a Nota do Segundo bimestre"));
var notasTerceiroBi = parseFloat(prompt("Informe a Nota do Terceiro bimestre"));
var notasQuartoBi = parseFloat(prompt("Informe a Nota do Quarto bimestre"));
```

- Calcular a média.

```
// Calcula média
var soma = (notasPrimeiroBi + notasSegundoBi + notasTerceiroBi + notasQuartoBi)/4;
```

- Formatar com uma casa decimal usando o `toFixed`

O método formata um número utilizando notação de ponto fixo.

```
// Formata decimais
var notaFinal = soma.toFixed(1);
```

- Verificar se aprovado ou não.`if...else`

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

```

// Verificação aprovado ou não
if(notaFinal > 6){
    alert("Aprovado: "+notaFinal);
}else{
    alert("Reprovado : "+notaFinal)
}

```

- [x] Alterar o fundo da tela da maneira que achar mais legal

```
body {
    font-family: 'Roboto Mono',monospace;
    min-height: 400px;
    background-image: url(https://images.pexels.com/photos/4904563/pexels-photo-4904563.jpeg?cs=srgb&dl=pexels-cottonbro-4904563.jpg&fm=jpg);
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;

  }
```

Resultado:
![Imagem de fundo](./images/page_alura.png)

[release/aula_calcula_media](https://github.com/neresfabio/imersao_alura_03_2022/blob/release/aula_calcula_media/README.md)

- [x] Imprimir na própria página o resultado, ao invés do console
      Existe varias formas de imprimir na página qualquer coisa, mas para essa atividade o `prompt` ou `alert` podem ser usados, pois são métodos básicos que ainda podem ser explorados.

- Criar um conversor de temperaturas entre farenheit e celcius

> Fórmula (valueF - 32)x5/9 = c
> Fórmula (valueC x 5/9)+32 = f

Usando alguns metodos para trabalhar com JavaScript

```
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
```

- Colocar a conta inteira da média em apenas uma linha

```
// Calcula média
var mediaFinal = ((notasPrimeiroBi + notasSegundoBi + notasTerceiroBi + notasQuartoBi)/4).toFixed(1);
```

### Links de estudo dessa aula

- [Release desse repo: aula 01](https://github.com/neresfabio/imersao_alura_03_2022/tree/release/finalAula01)
- [Váriaveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#vari%C3%A1veis)
- [Function parseFloat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Manifesto Tech](https://manifestotech.org/)
- [Resultado final do meu projeto no CODPEN](https://codepen.io/pen?template=MWrWPRG)

## Aula 02

Conversor de moedas

Aula 03
Mentalista

Aula 04
Array, lista e AluraFlix

Aula 04
Funções no AluraFlix

Paulo Silveira
Rafaella Ballerini
Guillherme Lima
