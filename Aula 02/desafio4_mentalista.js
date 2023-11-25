// Desafio 4: Escrever o código utilizando "while" em vez de "for".

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
};

var numeroSecreto = randomRange(1, 1000)

var rodadas = 0

// Utilizando um laço de "while":
while(numeroSecreto != numeroEscolhido) {
  var numeroEscolhido = prompt("Escolha um número entre 1 e 1000.")
  if(numeroSecreto == numeroEscolhido) {
    alert("Monstro!!!! Você acertou!")
    rodadas = rodadas + 1
  } else if(isNaN(numeroEscolhido) || numeroEscolhido === null || numeroEscolhido.trim() === '') {
    alert("Você não escolheu um número! Esta rodada não será contabilizada.")
  } else if(numeroSecreto > numeroEscolhido) {
    alert("Errou! " + numeroEscolhido + " é menor que o número secreto.")
    rodadas = rodadas + 1
  } else if(numeroSecreto < numeroEscolhido) {
    alert("Errou! " + numeroEscolhido + " é maior que o número secreto.")
    rodadas = rodadas + 1
  }
}

alert("Você demorou " + rodadas + " rodadas para acertar o número.")
