# Imerssão DEV Alura
### Como compartilhar seu CodePen:
- Clique na opção Settings no canto superior direito;
- Selecione a opção Pen Details (Detalhes);
- No campo Pen Title você pode dar o nome do seu projeto;
- No campo Pen Description, você pode dar detalhes sobre o projeto (o que ele faz, qual objetivo do projeto);
- Para compartilhar seu projeto, no campo Tags, você pode adicionar #imersaodev e #alura
Agora só salvar seu projeto e compartilhar o link marcando a Alura nas redes sociais!

## Aula 01
># Variavéis, operções e média.

Nesta primeira aula da Imersão Dev, criamos uma calculadora de média e aprendemos o que são variáveis e como realizar operações.

Neste programa, focamos nas primeiras ferramentas principais de qualquer linguagem de programação: variáveis, operadores, arredondamento e console.

### Conteúdo detalhado desta aula
- [x] Criar uma conta no CodePen;

- [x] Entender as diferenças entre HTML, CSS e 
JavaScript;

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

A condicional if  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

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

- [X] Imprimir na própria página o resultado, ao invés do console
Existe varias formas de imprimir na página qualquer coisa, mas para essa atividade o `prompt` ou `alert` podem ser usados, pois são métodos básicos que ainda podem ser explorados.

- Criar um conversor de temperaturas entre farenheit e celcius
- Colocar a conta inteira da média em apenas uma linha

### Links de estudo dessa aula

- [Váriaveis](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#vari%C3%A1veis)
- [Function parseFloat](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Manifesto Tech](https://manifestotech.org/)
## Aula 02
Conversor de moedas





Aula 03
Mentalista




Aula 04
Array, lista e AluraFlix




Aula 04
Funções  no AluraFlix

Paulo Silveira
Rafaella Ballerini
Guillherme Lima
