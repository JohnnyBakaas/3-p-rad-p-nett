"use strict";

let curentPlayer = "X"

let boardState = new Array(9).fill(true)
let boardStateOwnd = new Array(9)
let idForSquare = ['0-0', '0-1', '0-2', '1-0', '1-1', '1-2', '2-0', '2-1', '2-2']

const go = (place) => {
    if (boardState[place] && !doWeHaveAWinner()){
        boardState[place] = false;
        document.getElementById(idForSquare[place]).innerHTML = `<div class="spilleBrikke">${curentPlayer}</div>`;
        boardStateOwnd[place] = curentPlayer;
        
        if (doWeHaveAWinner()) {
            document.getElementById('gmae-info').innerHTML = `<div class="vinnerTekst">Spiller ${curentPlayer} er vinneren &#127881;</div>`;
        } else {
            nexstPlayer()
            document.getElementById('gmae-info').innerHTML = `<div>Det er spiller  ${curentPlayer}  sin tur :)</div>`;
        }
    } 
}

document.getElementById('0-0').addEventListener("click", () => go(0));
document.getElementById('0-1').addEventListener("click", () => go(1));
document.getElementById('0-2').addEventListener("click", () => go(2));

document.getElementById('1-0').addEventListener("click", () => go(3));
document.getElementById('1-1').addEventListener("click", () => go(4));
document.getElementById('1-2').addEventListener("click", () => go(5));

document.getElementById('2-0').addEventListener("click", () => go(6));
document.getElementById('2-1').addEventListener("click", () => go(7));
document.getElementById('2-2').addEventListener("click", () => go(8));

const nexstPlayer = () => {
    if (curentPlayer == "X") {
        curentPlayer = "O";
    } else {
        curentPlayer = "X";
    }
}

const doWeHaveAWinner = () => {
    if (boardStateOwnd[0] == boardStateOwnd[1] && boardStateOwnd[2]) {return true}
    if (boardStateOwnd[3] == boardStateOwnd[4] && boardStateOwnd[5]) {return true}
    if (boardStateOwnd[6] == boardStateOwnd[7] && boardStateOwnd[8]) {return true}

    if (boardStateOwnd[0] == boardStateOwnd[3] && boardStateOwnd[6]) {return true}
    if (boardStateOwnd[1] == boardStateOwnd[4] && boardStateOwnd[7]) {return true}
    if (boardStateOwnd[2] == boardStateOwnd[5] && boardStateOwnd[8]) {return true}

    if (boardStateOwnd[0] == boardStateOwnd[4] && boardStateOwnd[8]) {return true}
    if (boardStateOwnd[2] == boardStateOwnd[4] && boardStateOwnd[6]) {return true}
}