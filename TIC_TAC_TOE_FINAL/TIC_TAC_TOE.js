window.onload = startGame();

// var playerA, playerB, message, reset, winner;


var cells = document.querySelectorAll("td");

function startGame() {
    xoListener();
}


function xoListener(){
 for (var i = cells.length - 1; i >= 0; i--) {
   cells[i].addEventListener("click", console.log("playXorO"));
 }
};


var turn = "X"

function playXorO(){
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    };

};




// test
// function testPrint() {
// var cells = document.getElementsById("id");
// console.log(cells);
// for (var i = 0; i < cells.length; i++) {
// console.log(cells);
//     for (var i = 0; i < cells.length; i++) {
//     if(cells.addEventListener("click", console.log("test")) {
// }
// };



