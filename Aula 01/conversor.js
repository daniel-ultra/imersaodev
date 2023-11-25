var nomeUsuario = prompt(
  "Olá! Este é o conversor interestelar. Como você se chama?"
);

while (nomeUsuario === null || nomeUsuario.trim() === "") {
  nomeUsuario = prompt(
    "Parece que você não digitou seu nome. Por favor, digite um nome válido:"
  );
}

function majNomeUsuario(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var maiusculaNomeUsuario = majNomeUsuario(nomeUsuario);

var distAnoLuz = parseFloat(
  prompt(
    maiusculaNomeUsuario +
      ", digite um valor em anos-luz e o converteremos para metros!"
  )
);

while (isNaN(distAnoLuz) === true) {
  var distAnoLuz = prompt(
    "Você não inseriu um número válido. Por favor, tente novamente."
  );
}

var conversaoAnosLuzMetros = 9.461 * 10 ** 15;

var distanciaEmMetros = distAnoLuz * conversaoAnosLuzMetros;

alert(
  maiusculaNomeUsuario +
    ", temos seu resultado! A distância da estrela Sirius para a Terra é de " +
    distanciaEmMetros +
    " metros."
);
