// Desafio 1: Adicionar mais jogadores; fazer uma lista com os jogadores; aplicar um laço "for" na function atualizarTabela() para exibir as células de cada jogador;

var paulo = {
  nome: "Paulo",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

var rafa = {
  nome: "Rafa",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
};

// variáveis base:
var listaJogadores = [paulo, rafa];
var elementoTabela = document.getElementById("tabelaJogadores");

// funções dos botões:
function adicionarVitoria(nome) {
  listaJogadores[nome].vitoria++;
  listaJogadores[nome].pontos = listaJogadores[nome].pontos + 3
  atualizarTabela();
}

function adicionarEmpate(nome) {
  listaJogadores[nome].empate++;
  listaJogadores[nome].pontos++
  atualizarTabela();
}

function adicionarDerrota(nome) {
  listaJogadores[nome].derrota++;
  atualizarTabela();
}

function atualizarTabela() {
  elementoTabela.innerHTML = ''; // Limpa a tabela antes de atualizar

  for (i = 0; i < listaJogadores.length; i++) {
    elementoTabela.innerHTML += `
      <tr>
        <td>${listaJogadores[i].nome}</td>
        <td>${listaJogadores[i].vitoria}</td>
        <td>${listaJogadores[i].empate}</td>
        <td>${listaJogadores[i].derrota}</td>
        <td>${listaJogadores[i].pontos}</td>
        <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
      </tr>`;
  }
}

// Chamada inicial para atualizar a tabela
atualizarTabela();
