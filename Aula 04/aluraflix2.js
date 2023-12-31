// Desafio 3: criar uma lista dos filmes
var listaFilmes = [];

function validarFormatoImagem(url) {
  return url.toLowerCase().endsWith("jpeg") || url.toLowerCase().endsWith("jpg")
}
// alternativa:
    // function isImagemValida(url) {
    //     // Lista de extensões de imagem válidas
    //     var extensoesValidas = ['.jpg', '.jpeg', '.png', '.gif'];
    
    //     // Verifica se o link termina com uma extensão válida
    //     return extensoesValidas.some(function(extensao) {
    //         return url.toLowerCase().endsWith(extensao);
    //     });
    // }

function validarCampoObrigatorio(valor) {
  return valor !== null && valor.trim() !== "";
}

function validarLinkTrailer(trailer) {
  return trailer !== null && trailer.trim() !== "";
}

function adicionarFilme() {
  var filmeVisto = document.getElementById("filme").value;
  var nomeFilmeVisto = document.getElementById("nomeFilme").value;
  var trailerVisto = document.getElementById("trailerVisto").value;

  if (!validarFormatoImagem(filmeVisto)) {
    alert("Insira um formato de imagem válido (JPEG ou JPG)!");
    return;
  }

  if (!validarCampoObrigatorio(nomeFilmeVisto)) {
    alert("Insira o nome do filme!");
    return;
  }

  if (!validarLinkTrailer(trailerVisto)) {
    alert("Insira um trailer para seu filme!");
    return;
  }

  var elementoListaFilmes = document.getElementById("listaFilmes");
  var novoConteudo =
  // Desafio 03: Fazer com que, ao clicar na imagem do filme, o usuário seja redirecionado para o trailer do filme no YT.
    `<a href=" ${trailerVisto} "><img src=" ${filmeVisto} "></a>` +
    "<p>" +
    nomeFilmeVisto +
    "</p>";

  listaFilmes.push(novoConteudo);
  elementoListaFilmes.innerHTML = listaFilmes.join("");

  function limparCampos () {
    document.getElementById("filme").value = "";
    document.getElementById("nomeFilme").value = "";
    document.getElementById("trailerVisto").value = "";
  }
  limparCampos()
}

// Desafio 01 (na descrição da aula): Criar um botão para remover um filme na tela
function removerFilme() {
  listaFilmes.pop();
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = listaFilmes.join("");
}

