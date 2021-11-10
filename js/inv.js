// SIDEBAR CANVAS
let inv = document.getElementById('sidebar');
let ictx = inv.getContext('2d');
inv.setAttribute('height', getComputedStyle(inv)["height"]);
inv.setAttribute('width', getComputedStyle(inv)["width"]);

let score = 0;

ictx.font = "30px arial";
ictx.fillStyle = 'white';
ictx.fillText(score, 25, 50);