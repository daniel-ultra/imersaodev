var nomeUsuario = prompt(
  "Olá! Este é o conversor interestelar. Como você se chama?"
);

// Caso o usuário não digite seu nome ou apenas preencha o prompt com espaços vazios:
while (nomeUsuario === null || nomeUsuario.trim() === "") {
  nomeUsuario = prompt(
    "Parece que você não digitou seu nome. Por favor, digite um nome válido:"
  );
}

// Função que coloca a primeira letra do nome em maiúscula:
function majNomeUsuario(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Coletando a quantidade a ser convertida e transformando-a em float:
var distAnoLuz = parseFloat(
  prompt(
    majNomeUsuario(nomeUsuario) +
      ", digite um valor em anos-luz e o converteremos para metros!"
  )
);

// Verificando se a quantidade introduzida de fato é um número:
while (isNaN(distAnoLuz)) {
  var distAnoLuz = prompt(
    "Você não inseriu um número válido. Por favor, tente novamente."
  );
}

// Constante de conversão:
var conversaoAnosLuzMetros = 9.461 * 10 ** 15;

var distanciaEmMetros = distAnoLuz * conversaoAnosLuzMetros;

alert(
  majNomeUsuario(nomeUsuario) +
    ", temos seu resultado! A distância da estrela Sirius para a Terra é de " +
    distanciaEmMetros +
    " metros."
);
