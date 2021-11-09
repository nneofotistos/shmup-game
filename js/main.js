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

const player = new Player(225, 550, 25, 25, 'blue');
player.render();

document.addEventListener('keydown', movement);
document.addEventListener('keyup', movement);

// two event listeners for keydown and keyup
// keydown sets state to key held down = true
// keyup sets key held down = false
// key held moves player in given direction



function movement(e) {
    console.log(e);
}

/* const move = {
    up: false,
    down: false,
    left: false,
    right: false
}

function movementHandler(e) {
    console.log(e);

    switch(e.key) {
        case 'w':
            // move donkey up
            player.y - 10 >= 0 ? player.y -= 10 : null;
            break;
        case 'a':
            // left
            player.x - 10 >= 0 ? player.x -= 10 : null;
            break;
        case 'd':
            // right
            player.x + 10 <= game.width ? player.x += 10 : null;
            break;
        case 's':
            // down
            player.y + 10 <= game.height ? player.y += 10 : null;
            break;
    }
}
 */
window.addEventListener('load', function(e) {
    const runGame = setInterval(gameLoop, 120);
})

function gameLoop () {
    ctx.clearRect(0, 0, game.width, game.height);
    player.render();
}