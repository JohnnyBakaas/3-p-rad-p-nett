var curentPlayer = "X"

var bord = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

const go = (arrEn, arrTo) => {
    console.log(bord[arrEn] [arrTo])

}

//const ree = (positonin, ) => {}

document.getElementById('0-0').addEventListener("click", () => go([0][0]));
document.getElementById('0-1').addEventListener("click", () => go([0][1]));
document.getElementById('0-2').addEventListener("click", () => go([0][2]));

document.getElementById('1-0').addEventListener("click", () => go([1][0]));
document.getElementById('1-1').addEventListener("click", () => go([1][1]));
document.getElementById('1-2').addEventListener("click", () => go([1][2]));

document.getElementById('2-0').addEventListener("click", () => go([2][0]));
document.getElementById('2-1').addEventListener("click", () => go([2][1]));
document.getElementById('2-2').addEventListener("click", () => go([2][2]));



const nexstPlayer = () => {
    if (curentPlayer == "X") {
        curentPlayer = "O";
    } else {
        curentPlayer = "X";
    }
}

const playerImput = () => {
    
}

const legalMove = () => {
    if (1==1) {

    }
}