// GAME CANVAS
let game = document.getElementById('game');
let ctx = game.getContext('2d');

game.setAttribute('height', getComputedStyle(game)["height"]);
game.setAttribute('width', getComputedStyle(game)["width"]);

class Rectangle {
    constructor(x, y, height, width, color, speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.speed = speed;
        this.alive = true;

        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.height, this.width)
        }
    }
}

const player = new Rectangle(225, 550, 25, 25, 'blue');
player.render();

// two event listeners for keydown and keyup
// keydown sets state to key held down = true
// keyup sets key held down = false
// key held down moves player in given direction

let keysDown = []; // track all keys being held

document.addEventListener('keydown', function (e) {

    keysDown.push(e.key); // push key to array when keydown
});

document.addEventListener('keyup', function (e) {

    for (x in keysDown) {
        if (keysDown[x] == e.key) {
            keysDown[x] = ''; // remove key from array when keyup
        }
    }
});

function keyDown(key) { // track which key is being held
    if (keysDown.includes(key)) {
        return true
    } else {
        return false
    }
}

let speed = 8;

window.addEventListener('load', function (e) {
    const runGame = setInterval(gameLoop, 60);
    const runInv = setInterval(invLoop, 60);
    timerSource = setInterval('addEnemy()', 1000);
})

var bullets = [];
var enemies = [];
var eBullets = [];

function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    player.render();
    
    // bullet movement
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].alive) {
            bullets[i].render();
            bullets[i].y -= 20;
        }

        if (bullets[i].y < - 10) {
            bullets[i].alive = null;
            bullets.splice(i,1);
            
        }
    }

    // enemy movement
    for (let j = 0; j < enemies.length; j++) {

        if (enemies[j].alive) {
            enemies[j].render();
            enemies[j].y += 4;

        }

        if (enemies[j].y > 700) {
            enemies[j].alive = null;
            enemies.splice(j,1);
            

        }
        // bullet and enemy collision
        for (let k = 0; k < bullets.length; k++) {
            if (bullets[k].x >= enemies[j].x && bullets[k].x + bullets[k].width < enemies[j].x + enemies[j].width && bullets[k].y < enemies[j].y + enemies[j].width && bullets[k].alive && enemies[j].alive) {
                bullets[k].alive = null;
                enemies[j].alive = null;
                enemies.splice(j,1);
                bullets.splice(k,1);
                score+=5000;
            }
        }
    }
    
    if (keyDown('w') || keyDown('ArrowUp') || keyDown('W')) {
        player.y - speed >= 0 ? player.y -= speed : null;
    }
    if (keyDown('s') || keyDown('ArrowDown') || keyDown('S')) {
        player.y + speed <= game.height - 25 ? player.y += 10 : null;
    }
    if (keyDown('a') || keyDown('ArrowLeft') || keyDown('A')) {
        player.x - speed >= 0 ? player.x -= speed : null;
    }
    if (keyDown('d') || keyDown('ArrowRight') || keyDown('D')) {
        player.x + speed <= game.width - 25 ? player.x += 10 : null;
    }
    // shoot
    if (keyDown('z') || keyDown('Z')) {
        var b = new Rectangle(player.x + 10, player.y, 5, 5, 'white', 5)
        bullets.push(b);
    }

    if (keyDown('x')) {
        if(bombs>0){
            useBomb();
        }
    }
}

function addEnemy() 
{ 
	var e = new Rectangle(225, 50, 25, 25, 'red');
	 
	e.x = Math.floor(Math.random() * (450 - 50)) 
	e.y = -50 
	 
	enemies.push(e);
    
}

function enemyFire(x, y)
{
    var eb = new Rectangle(x, y, 28, 28, 'white');

    eBullets.push(eb);
}



