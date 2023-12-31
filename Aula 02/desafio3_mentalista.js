// Desafio 3: Limitar o número máximo de tentativas para acertar o número secreto.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var numeroSecreto = randomRange(1, 1000);

var rodadas = 0;

for (i = 0; numeroSecreto != numeroEscolhido && rodadas < 10; i++) {
  var numeroEscolhido = prompt(
    "Escolha um número entre 1 e 1000. Você terá no máximo 10 tentativas para acertar o número!"
  );
  if (
    isNaN(numeroEscolhido) ||
    numeroEscolhido === null ||
    numeroEscolhido.trim() === "" ||
    numeroEscolhido <= 0
  ) {
    alert("Você não escolheu um número! Esta rodada não será contabilizada.");
  } else if (numeroEscolhido == numeroSecreto) {
    alert("Monstro!!!! Você acertou!");
    rodadas++;
    alert("Você demorou " + rodadas + " rodadas para acertar o número.");
  } else if (numeroSecreto > numeroEscolhido) {
    alert("Errou! " + numeroEscolhido + " é menor que o número secreto.");
    rodadas++;
  } else if (numeroSecreto < numeroEscolhido) {
    alert("Errou! " + numeroEscolhido + " é maior que o número secreto.");
    rodadas++;
  }
}

if (numeroSecreto != numeroEscolhido && rodadas == 10) {
  alert("Você atingiu o número máximo de tentativas.");
}

