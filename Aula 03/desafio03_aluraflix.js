// Desafio 3: Criar uma lista paralela para exibição dos nomes dos filmes:

var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BMTg3MTI5NTk0N15BMl5BanBnXkFtZTgwMjU1MDM5MTE@._V1_.jpg",
  "https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg",
  "https://pics.filmaffinity.com/Napoleon-576065052-mmed.jpg"
];

var nomeFilmes = ["La Grande Illusion", "Arrival", ""];

for (var i = 0; i < listaFilmes.length; i++) {
  if (listaFilmes[i].endsWith("jpeg") || listaFilmes[i].endsWith("jpg")) {
    document.write("<img src=" + listaFilmes[i] + ">");
    document.write("<p>" + nomeFilmes[i] + "</p>");
  } else {
    document.write(
      "<p> A imagem " +
        i +
        " não foi lida pois não é um arquivo do tipo .jpeg ou .jpg."
    );
  }
  if ((nomeFilmes[i].trim() === "")) {
    document.write("O nome do filme não foi inserido!");
  }
}
