
function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+ 'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 28;
    };

    this.moveLeft = function(){
        this.left -= 28;
    };
    this.moveDown = function(){
        this.top += 16;
    };
    this.moveUp = function(){
        this.top -=16;
    };

}

var hero = new Hero('doremon.png', 50, 50, 200);
var touchRight = false;
var touchBottom = false;
var touchLeft = false;
var touchTop = false;
var width = 500;
var height = 500;
function start(round) {
    // if (hero.left < width - hero.size) {
    //     hero.moveRight();
    // } else {
    //     touchRight = true;
    // }
    // if (touchRight) {
    //     hero.moveLeft();
    // }

    if (!touchRight) {
        hero.moveRight();
        touchLeft = true;
        touchBottom = true;
        touchTop = true;
        if (hero.left >= width - hero.size - 5 * round) {
            touchBottom = false;
        }
    }

    if (!touchBottom)  {
        hero.moveDown();
        touchRight = true;
        touchLeft = true;
        touchTop = true;
        if (hero.top >= height - hero.size - 5 * round) {
            touchLeft = false;
        }
    }

    if (!touchLeft) {
        hero.moveLeft();
        touchRight = true;
        touchBottom = true;
        touchTop = true;
        if (hero.left <= 50 + 5 * round) {
            touchTop = false;
        }
    }


    if (!touchTop) {
        hero.moveUp();
        touchRight = true;
        touchLeft = true;
        touchBottom = true;
        if (hero.top <= 50 + 5*round) {
            touchRight = false;
            round ++;
        }
    }



    // while (!touchRight) {
    //     hero.moveRight();
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    //     if (hero.left > width - hero.size) {
    //         touchRight = true;
    //     }
    // }
    // while (!touchBottom) {
    //     hero.moveDown();
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    //     if (hero.top > height - hero.size) {
    //         touchBottom = true;
    //     }
    // }
    // while (!touchLeft) {
    //     hero.moveLeft();
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    //     if (hero.left < 50) {
    //         touchLeft = true;
    //     }
    // }
    // while (!touchTop) {
    //     hero.moveUp();
    //     document.getElementById('game').innerHTML = hero.getHeroElement();
    //     if (hero.top < 20) {
    //         touchTop = true;
    //     }
    // }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 30)
}
var round = 1;
start(round);

