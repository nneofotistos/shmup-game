# shmup-game
Very basic shoot-em-up

# How to play
Go to https://nneofotistos.github.io/shmup-game/
Controls displayed on page, shoot enemies for 5000 points each, dont get hit

# Made with
HTML5
JavaScript
CSS

# Code snippets
```
function addEnemy() {
    var e = new Rectangle(225, 50, 25, 25, 'red');

    e.x = Math.floor(Math.random() * (450 - 50))
    e.y = -50

    enemies.push(e);

}

function enemyFire(x, y) {
    var eb = new Rectangle(x, y, 8, 10, 'white');

    eBullets.push(eb);

}

function reload(e) {
    setTimeout(function () {
        if (e.canShoot == false) {
            e.canShoot = true;
        }
    }, 1500);

}

function playerHit() {
    if(hits>0 && !player.invuln){
        hits--;
        invuln(player);
    } else if (hits<=1 && !player.invuln){
        hits--;
        gameOver();
    }
}

function invuln(p) {
    p.invuln = true;
    p.color = 'rgba(255, 255, 255, 0.5)';
    setTimeout(function () {
        p.invuln = false;
        p.color = 'blue';
    }, 2000);
}

function gameOver() {
    player.alive = false;
    console.log('game over');
}
```