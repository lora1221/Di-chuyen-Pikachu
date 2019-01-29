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
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveCrazy = function(){
        this.top = Math.random()*(window.innerHeight - this.size) ;
        this.left = Math.random()*(window.innerWidth - this.size);
        this.count ++;
    };


}

var hero = new Hero('doremon.png', 20, 50, 200, 50);

function start(){
    if (hero.count < 50) {
        hero.moveCrazy();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200)
}

start();