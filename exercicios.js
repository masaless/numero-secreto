// Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
  console.log('OLá, mundo!');
}
olaMundo();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function recebeNome(nome) {
   console.log(`Olá, ${nome}`)
}

recebeNome('Matheus');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function recebeNumero(numero){
 console.log( numero * 2);
}
recebeNumero(100);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}
let media = parseInt(calcularMedia(10, 0, 50))
console.log(media)

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function numeroMaior(n1, n2) {
  if(n1 > n2){
    console.log(n1)
  } else if (n2 > n1) {
    console.log(n2)
  } else  {
    console.log('Os números são iguais')
  }
} 
numeroMaior(3, 3)


// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function recebeMultiplicacao(numero) {
  return numero * numero
}

let multi = recebeMultiplicacao(20)
console.log(multi); 

//Exercicio 3
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  console.log(imc);
}
calcularIMC(90, 1.80);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numeroFatorial) {
 if(numeroFatorial == 0) {
  return 1;
 }
 resultado = 1;
 for(let i = 1; i <= numeroFatorial; i++) {
  resultado *= i
 }
 return resultado;
}
console.log(calcularFatorial(5))

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converteMoeda(moeda){
 return moeda * 4.80;
} 
console.log("Moeda convertiva: " + "R$ " + converteMoeda(50));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaEPerimetro(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura)
  console.log(`Área: ${area}`);
  console.log(`Perimetro: ${perimetro}`);
}

calcularAreaEPerimetro(2, 4);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularSalaCircula(raio) {
   let area = Math.PI * raio * raio;
   let circunferencia = 2 * Math.PI * raio;
   console.log(`Área: ${area}`);
  console.log(`Perimetro: ${circunferencia}`);
}
calcularSalaCircula(4);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro. 

function tabuada2(numero) {
  for(let i = 1; i <= 10; i++) {
    let resultado = numero * 1;
    console.log(`${numero} x ${i} = ${resultado} `)
  }
}

tabuada2(5);

//------------------------------------------------//

// Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagemDeProgramacao = ['JS', 'C', 'C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagemDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagemDeProgramacao);

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ['Matheus', 'Greicy', 'Nina'];
console.log(nomes[0])

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(nomes[1]);

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(nomes[2]);


