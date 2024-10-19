let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAletorios();
//let numeroSecreto = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela('#texto_principal', 'Jogo do número secreto');
exibirTextoNaTela('.texto__paragrafo', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();


function verificarChute() {
  let chute = document.querySelector('input').value;
  if(chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!!');
    let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O número secreto é menor');
  } else {
    exibirTextoNaTela('p', 'O número secreto é maior');
  }
  tentativas++
  limparCampo();
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAletorios();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAletorios() {
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
 if(quantidadeDeElementosNaLista == numeroLimite) {
  listaDeNumerosSorteados = [];
 }

 if(listaDeNumerosSorteados.includes(numeroEscolhido)){
   return gerarNumeroAletorios();
 }else {
  listaDeNumerosSorteados.push(numeroEscolhido);
  console.log(listaDeNumerosSorteados)
  return numeroEscolhido;
 }
}


