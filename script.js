/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.count = 0;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.left+ 'px; left:'+this.left+'px;position:absolute;" />';
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

var hero = new Hero('doremon.png', 20, 50, 200, 50);
var touchRight = false;
var touchBottom = false;
var touchLeft = false;
function start(){
   // if (!touchRight) {
        if (hero.left < window.innerWidth - hero.size) {
            // alert(hero.left);
            // alert(hero.top);
            hero.moveRight();
        }
    // } else {
    //     if (hero.top < 500 - hero.size) {
    //         hero.moveDown();
    //     } else {
    //         touchBottom = true;
    //     }


    // if (touchBottom) {
    //     if (hero.left > hero.size) {
    //         hero.moveLeft();
    //     } else {
    //         touchLeft = true;
    //     }
    // }


    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();