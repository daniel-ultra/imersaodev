function adicionarVitoria(nome) {
  var elementoVit = document.getElementById("vit" + nome);
  var valorVit = parseInt(elementoVit.innerHTML || 0);
  var elementoPontosVit = document.getElementById("pontos" + nome);
  var valorPontosVit = parseInt(elementoPontosVit.innerHTML || 0);
  elementoVit.innerHTML = valorVit + 1;
  elementoPontosVit.innerHTML = valorPontosVit + 3;

  if (nome === "Paulo") {
    var elementoDerRafa = document.getElementById("derRafa");
    var valorDerRafa = parseInt(elementoDerRafa.innerHTML || 0);
    elementoDerRafa.innerHTML = valorDerRafa + 1;
  } else if (nome === "Rafa") {
    var elementoDerPaulo = document.getElementById("derPaulo");
    var valorDerPaulo = parseInt(elementoDerPaulo.innerHTML || 0);
    elementoDerPaulo.innerHTML = valorDerPaulo + 1;
  }
  checagemVitoria(nome);
}

function adicionarEmpate(nome) {
  var elementoEmp = document.getElementById("emp" + nome);
  var valorEmp = parseInt(elementoEmp.innerHTML || 0);
  elementoEmp.innerHTML = valorEmp + 1;
  var elementoPontosEmp = document.getElementById("pontos" + nome);
  var valorPontosEmp = parseInt(elementoPontosEmp.innerHTML || 0);
  elementoPontosEmp.innerHTML = valorPontosEmp + 1;

  if (nome === "Paulo") {
    var elementoEmpRafa = document.getElementById("empRafa");
    var valorEmpRafa = parseInt(elementoEmpRafa.innerHTML || 0);
    elementoEmpRafa.innerHTML = valorEmpRafa + 1;
    var elementoPontosEmpRafa = document.getElementById("pontosRafa");
    var valorPontosEmpRafa = parseInt(elementoPontosEmpRafa.innerHTML || 0);
    elementoPontosEmpRafa.innerHTML = valorPontosEmpRafa + 1;
  } else if (nome === "Rafa") {
    var elementoEmpPaulo = document.getElementById("empPaulo");
    var valorEmpPaulo = parseint(elementoEmpPaulo.innerHTML || 0);
    elementoEmpPaulo.innerHTML = valorEmpPaulo + 1;
    var elementoPontosEmpPaulo = document.getElementById("pontosPaulo");
    var valorPontosEmpPaulo = parseInt(elementoPontosEmpPaulo.innerHTML || 0);
    elementoPontosEmpPaulo.innerHTML = valorPontosEmpPaulo + 1;
  }
  checagemVitoria(nome);
}

function adicionarDerrota(nome) {
  var elementoDer = document.getElementById("der" + nome);
  var valorDer = parseInt(elementoDer.innerHTML || 0);
  elementoDer.innerHTML = valorDer + 1;

  if (nome === "Paulo") {
    var elementoVitRafa = document.getElementById("vitRafa");
    var valorVitRafa = parseInt(elementoVitRafa.innerHTML || 0);
    elementoVitRafa.innerHTML = valorVitRafa + 1;
    var elementoPontosVitRafa = document.getElementById("pontosRafa");
    var valorPontosVitRafa = parseInt(elementoPontosVitRafa.innerHTML || 0);
    elementoPontosVitRafa.innerHTML = valorPontosVitRafa + 3;
  } else if (nome === "Rafa") {
    var elementoVitPaulo = document.getElementById("vitPaulo");
    var valorVitPaulo = parseInt(elementoVitPaulo.innerHTML || 0);
    elementoVitPaulo.innerHTML = valorVitPaulo + 1;
    var elementoPontosVitPaulo = document.getElementById("pontosPaulo");
    var valorPontosVitPaulo = parseInt(elementoPontosVitPaulo.innerHTML || 0);
    elementoPontosVitPaulo.innerHTML = valorPontosVitPaulo + 3;
  }
  checagemVitoria(nome);
}

function checagemVitoria(nome) {
  if (parseInt(document.getElementById("pontos" + nome).textContent) >= 15) {
    alert("Parabéns " + nome + "! Você venceu!");
  }
}
