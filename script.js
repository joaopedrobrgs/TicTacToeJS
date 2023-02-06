window.onload = function () {

    //*CRIANDO VARIÁVEIS E CONSTANTES PRINCIPAIS

    //CONSTANTES PLAYERS
    const player1 = "Jogador 01(x)";
    const player2 = "Jogador 02(o)";

    //VARIÁVEL PARA INDICAR DE QUEM É A VEZ
    var playTime = player1;

    //VARIÁVEL PARA INDICAR QUANDO O JOGO ACABOU
    var gameOver = false;


    //*CHAMANDO FUNÇÕES

    //FUNÇÃO PARA ATUALIZAR VARIÁVEL QUE INDICA DE QUEM É A VEZ
    refreshPlayTime();
    //FUNÇÃO PARA INICIALIZAR ESPAÇOS DA ÁREA DE JOGO
    gameStart();
    //FUNÇÃO PARA VERIFICAR SE HOUVE UM VENCEDOR NO JOGO
    verifyWinner();
    //FUNÇÃO NOVO JOGO
    var newGameButton = document.getElementById("newGameButton");
    newGameButton.addEventListener("click", newGameFunction);

    //*CRIANDO DE FATO AS FUNÇÕES

    function refreshPlayTime() {

        if (gameOver) {
            redata-turn;
        }

        //ACESSANDO IMAGEM DO MOSTRADOR DE QUEM É A VEZ
        var playTimeIMG = document.getElementById("whoIsPlaying");

        if (playTime == player1) {
            playTimeIMG.src = "./assets/x.png";
        }
        else {
            playTimeIMG.src = "./assets/circle.png"
        }

    }

    function gameStart() {

        //ACESSANDO ESPAÇOS DA NOSSA ÁREA DE JOGO
        var gameSpace = document.getElementsByClassName("space");

        for (let element of gameSpace) {
            element.addEventListener("click", function () {

                if (gameOver) {
                    redata-turn;
                }

                if (this/*ou element*/.getElementsByTagName("img").length == 0) {

                    if (playTime == player1) {
                        this.innerHTML = '<img src="./assets/x.png">';
                        this.dataset.turn = player1;
                        playTime = player2;
                    }
                    else {
                        this.innerHTML = '<img src="./assets/circle.png">';
                        this.dataset.turn = player2;
                        playTime = player1;
                    }
                }
                refreshPlayTime();
                verifyWinner()
            })
        }
    }

    async function verifyWinner(){
    
        var a1 = document.getElementById("a1").getAttribute("data-turn");
        var a2 = document.getElementById("a2").getAttribute("data-turn");
        var a3 = document.getElementById("a3").getAttribute("data-turn");
    
        var b1 = document.getElementById("b1").getAttribute("data-turn");
        var b2 = document.getElementById("b2").getAttribute("data-turn");
        var b3 = document.getElementById("b3").getAttribute("data-turn");
    
        var c1 = document.getElementById("c1").getAttribute("data-turn");
        var c2 = document.getElementById("c2").getAttribute("data-turn");
        var c3 = document.getElementById("c3").getAttribute("data-turn");        

        var winner = "";

        if((b2 == a1 && b2 == c3 && b2 != "") || (b2 == b1 && b2 == b3 && b2 != "") || (b2 == c1 && b2 == a3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "")){
            winner = b2;
        }
        else if((a1 == a2 && a1 == a3 && a1 != "") || (a1 == b1 && a1 == c1 && a1 != "")){
            winner = a1;
        }
        else if((c3 == c2 && c3 == c1 && c3 != "") || (c3 == b3 && c3 == a3 && c3 != "")){
            winner = c3;
        }

        if(winner){
            gameOver = true;
            await new Promise(resolve => setTimeout(resolve, 50));
            alert(winner + " ganhou o jogo!")
            document.location.reload(true);
        }
        
        if(a1 && a2 && a3 && b1 && b2 && b3 && c1 && c2 && c3){
            gameOver = true;
            await new Promise(resolve => setTimeout(resolve, 50));
            alert("o jogo acabou!")
            document.location.reload(true)
        }

    }

    function newGameFunction(){
        document.location.reload(true)
    }
}



