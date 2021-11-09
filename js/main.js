// canvas
let game = document.getElementById('game');
let ctx = game.getContext('2d');

game.setAttribute('height', getComputedStyle(game)["height"]);
game.setAttribute('width', getComputedStyle(game)["width"]);

class Player {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;

        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.height, this.width)
        }
    }
}

class Enemy {
    constructor(x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;

        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.height, this.width)
        }
    }
}

class Bullet {
    constructor(x, y, height, width, color, speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.speed = speed;

        this.render = function () {
            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.height, this.width)
        }
    }
}

const player = new Player(225, 550, 25, 25, 'blue');
player.render();

const enemy1 = new Enemy(225, 50, 25, 25, 'red');
enemy1.render();

// two event listeners for keydown and keyup
// keydown sets state to key held down = true
// keyup sets key held down = false
// key held down moves player in given direction

let keysDown = []; // track all keys being held

document.addEventListener('keydown', function(e){
    
    keysDown.push(e.key); // push key to array when keydown
});

document.addEventListener('keyup', function(e){

    for(x in keysDown){
        if (keysDown[x] == e.key){
            keysDown[x]=''; // remove key from array when keyup
        }
    }
});

function keyDown(key){ // track which key is being held
    if(keysDown.includes(key)){
        return true
    } else {
        return false
    }
}

let speed = 8;

window.addEventListener('load', function(e) {
    const runGame = setInterval(gameLoop, 60);
})

// on keydown, fire projectile
// projectile moves forward
// while keydown, wait 100 frames before firing next projectile

var bullets = [];

function gameLoop () {
    ctx.clearRect(0, 0, game.width, game.height);
    player.render();
    enemy1.render();
    if(keyDown('w')||keyDown('ArrowUp')||keyDown('W')){
        player.y-speed>=0?player.y-=speed:null;
    }
    if(keyDown('s')||keyDown('ArrowDown')||keyDown('S')){
        player.y+speed<=game.height-25?player.y+=10:null;
    }
    if(keyDown('a')||keyDown('ArrowLeft')||keyDown('A')){
        player.x-speed>=0?player.x-=speed:null;
    }
    if(keyDown('d')||keyDown('ArrowRight')||keyDown('D')){
        player.x+speed<=game.width-25?player.x+=10:null;
    }
    // shoot
    if(keyDown('z')||keyDown('Z')){
        var newBullet = new Bullet(player.x, player.y, 5, 5, 'yellow', 8);
        
    }

}