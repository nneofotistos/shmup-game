// SIDEBAR CANVAS
let inv = document.getElementById('sidebar');
let ictx = inv.getContext('2d');
inv.setAttribute('height', getComputedStyle(inv)["height"]);
inv.setAttribute('width', getComputedStyle(inv)["width"]);


const bomb_count = 3;
let hits = 8;
let score = 0;
let bombs;
bombs = bomb_count;

function useBomb(){
    bombs--;
    enemies = [];
}

function invLoop() {
    ictx.font = "30px arial";
    ictx.fillStyle = 'white';
    ictx.clearRect(0, 0, inv.width, inv.height);
    ictx.fillText(score, 25, 50);
    ictx.fillText("Bombs:", 25, 90);
    for(let i=0;i<bombs;i++){
        ictx.fillRect(25*i+25, 120, 10, 10);
    }
    ictx.fillText("Lives:", 25, 190);
    for(let i=0;i<hits;i++){
        ictx.fillRect(25*i+25, 220, 10, 10);
    }
}