/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    // this.count = 0;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+ 'px; left:'+this.left+'px;position:absolute;" />';
    };

    // this.moveCrazy = function(){
    //     this.top = Math.random()*(window.innerHeight - this.size) ;
    //     this.left = Math.random()*(window.innerWidth - this.size);
    //     this.count ++;
    // };

    this.moveRight = function(){
        this.left += 30;
    };

    this.moveLeft = function(){
        this.left -= 30;
    };
    this.moveDown = function(){
        this.top += 30;
    };
    this.moveUp = function(){
        this.top -=30;
    };

}

var hero = new Hero('doremon.png', 20, 50, 200);
var touchRight = false;
var touchBottom = false;
var touchLeft = false;
var touchTop = false;
// function start(){
    // if (!touchRight) {
    //     if (hero.left < window.innerWidth - hero.size) {
    //         console.log("top: " + hero.top);
    //         hero.moveRight();
    //     } else {
    //         touchRight = true;
    //     }
    // } else {
    //     if (!touchBottom) {
    //         if (hero.top > window.innerHeight - hero.size) {
    //             console.log("top1 " + hero.top);
    //             hero.moveDown();
    //         } else {
    //             touchBottom = true;
    //         }
    //     }
    // }
var round = 0;
var width = window.innerWidth;
var height = window.innerHeight;
function start() {
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
        if (hero.left >= width - hero.size) {
            touchBottom = false;
        }
    }

    if (!touchBottom)  {
        hero.moveDown();
        touchRight = true;
        touchLeft = true;
        touchTop = true;
        if (hero.top >= height - hero.size) {
            touchLeft = false;
        }
    }

    if (!touchLeft) {
        hero.moveLeft();
        touchRight = true;
        touchBottom = true;
        touchTop = true;
        if (hero.left <= 20) {
            touchTop = false;
        }
    }


    if (!touchTop) {
        hero.moveUp();
        touchRight = true;
        touchLeft = true;
        touchBottom = true;
        if (hero.top <= 50) {
            touchRight = false;
            width -= 50;
            height -=50;
            hero.left += 50;
            hero.top += 50;
        }
    }


    // if (hero.top < height - hero.size && hero.left >= width - hero.size){
    //     hero.moveDown();
    // }



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
    setTimeout(start, 50)
}

start();
// while (round < 4) {
//     start();
//     round ++;
//     width -= 50;
//     height -= 50;
//     hero.left = 20*round;
//     hero.top = 50*round;
//     touchRight = false;
//     touchLeft = false;
//     touchBottom = false;
//     touchTop = false;
//
// }
