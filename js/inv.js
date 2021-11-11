// SIDEBAR CANVAS
let inv = document.getElementById('sidebar');
let ictx = inv.getContext('2d');
inv.setAttribute('height', getComputedStyle(inv)["height"]);
inv.setAttribute('width', getComputedStyle(inv)["width"]);



let hits = 8;
let score = 0;
let bombs = [1,2,3];



function invLoop() {
    ictx.font = "30px arial";
    ictx.fillStyle = 'white';
    ictx.clearRect(0, 0, inv.width, inv.height);
    ictx.fillText(score, 25, 50);
    ictx.fillText("Bombs:", 25, 90);

}