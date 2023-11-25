var nomeUsuario = prompt("Olá! Este é o conversor interestelar. Como você se chama?")

var distAnoLuz = parseFloat(prompt(nomeUsuario + ", Digite um valor em anos-luz e o converteremos para metros!"));

var conversaoAnosLuzMetros = 9.461 * 10 ** 15;

var distanciaEmMetros = distAnoLuz * conversaoAnosLuzMetros;

alert(nomeUsuario + ", temos seu resultado! A distância da estrela Sirius para a Terra é de " +
    distanciaEmMetros +
    " metros."
);
