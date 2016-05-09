window.onload = startGame();

// var playerA, playerB, message, reset, winner;


function startGame() {
    xListener();
    xListener();
}

function xoListener(){
    var cells = document.getElementsByTagName("td");
        cells.addEventListener("click", console.log("clicked."))
}

function oListener(){

}


var turn = "X"

function playXorO(){
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    };

} 












