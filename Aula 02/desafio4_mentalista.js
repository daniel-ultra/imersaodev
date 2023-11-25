function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
};

var numeroSecreto = randomRange(1, 1000)

var rodadas = 0

while(numeroSecreto != numeroEscolhido) {
  var numeroEscolhido = prompt("Escolha um número entre 1 e 1000.")
  if(numeroSecreto == numeroEscolhido) {
    alert("Monstro!!!! Você acertou!")
    rodadas = rodadas + 1
  } else if(numeroSecreto > numeroEscolhido) {
    alert("Errou! " + numeroEscolhido + " é menor que o número secreto.")
    rodadas = rodadas + 1
  } else if(numeroSecreto < numeroEscolhido) {
    alert("Errou! " + numeroEscolhido + " é maior que o número secreto.")
    rodadas = rodadas + 1
  }
}

alert("Você demorou " + rodadas + " rodadas para acertar o número.")
