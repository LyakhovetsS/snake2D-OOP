import Config from './config.js';
import Snake from './snake.js';
import Canvas from './canvas.js';
import GameLoop from './gameLoop.js';
class Game {
    constructor() {
        console.log('test');
        this.container = document.getElementById('game');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.setAttribute('id', 'game');
            document.body.appendChild(this.container);
        }
        this.config = new Config({ sizeBerry: 4, sizeCell: 16 });
        this.snake = new Snake(this.config);
        this.canvas = new Canvas(this.container);
        new GameLoop( this.update.bind(this), this.draw.bind(this) );
    }

    update() {
        this.snake.update();
    }
    draw() {

    }
}
new Game();