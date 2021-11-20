window.onload = function () {
  var stage = document.getElementById("stage");
  var context = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);

  setInterval(tabuleiro, 90);
  const vel = 1;
  //   Velocidade que vai andar
  var velocidadeX = 0;
  var velocidadeY = 0;
  //   Ponto inicial da cobra
  var pontoX = 10;
  var pontoY = 10;
  //   Dimenções dos quadrados
  var tamanhoQuadrado = 20;
  var quadrados = 20;
  //   Onde a maça vai iniciar
  var posicaoMacaX = 15;
  var posicaoMacaY = 15;
  //   Tamanho da cobra
  var rastro = [];
  var calda = 5;
  function tabuleiro() {
    pontoX += velocidadeX;
    pontoY += velocidadeY;
    if (pontoX < 0) {
      pontoX = quadrados - 1;
    }
    if (pontoX > quadrados - 1) {
      pontoX = 0;
    }
    if (pontoY < 0) {
      pontoY = quadrados - 1;
    }
    if (pontoY > quadrados - 1) {
      pontoY = 0;
    }

    //   criando um tabuleiro
    context.fillStyle = "black";
    context.fillRect(0, 0, stage.width, stage.height);

    context.fillStyle = "red";
    context.fillRect(
      posicaoMacaX * tamanhoQuadrado,
      posicaoMacaY * tamanhoQuadrado,
      tamanhoQuadrado,
      tamanhoQuadrado
    );

    context.fillStyle = "gray";
    for (var i = 0; i < rastro.length; i++) {
      context.fillRect(
        rastro[i].x * tamanhoQuadrado,
        rastro[i].y * tamanhoQuadrado,
        tamanhoQuadrado - 1,
        tamanhoQuadrado - 1
      );
      if (rastro[i].x == pontoX && rastro[i].y == pontoY) {
        velocidadeX = 0;
        velocidadeY = 0;
        calda = 5;
      }
    }
    rastro.push({ x: pontoX, y: pontoY });
    while (rastro.length > calda) {
      rastro.shift();
    }
    if (posicaoMacaX == pontoX && posicaoMacaY == pontoY) {
      calda++;
      posicaoMacaX = Math.floor(Math.random() * quadrados);
      posicaoMacaY = Math.floor(Math.random() * quadrados);
    }
  }

  function keyPush(event) {
    switch (event.keyCode) {
      case 37: //Left
        velocidadeX = -vel;
        velocidadeY = 0;
        break;
      case 38: //up
        velocidadeX = 0;
        velocidadeY = -vel;
        break;
      case 39: //right
        velocidadeX = vel;
        velocidadeY = 0;
        break;
      case 40: //down
        velocidadeX = 0;
        velocidadeY = vel;
        break;
    }
  }
};
