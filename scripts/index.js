import Config from './config.js';
import Snake from './snake.js';
import Canvas from './canvas.js';
import Score from './score.js';
import Berry from './berry.js';
import GameLoop from './gameLoop.js';
class Game {
    constructor() {
        this.container = document.getElementById('game');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.setAttribute('id', 'game');
            document.body.appendChild(this.container);
        }
        this.config = new Config({ sizeBerry: 4, sizeCell: 16 });
        this.score = new Score(this.container);
        this.canvas = new Canvas(this.container, this.config);
        this.snake = new Snake(this.config);
        this.berry = new Berry(this.config, this.canvas);
        new GameLoop(this.config, this.update.bind(this), this.draw.bind(this) );
    }

    update() {
        this.snake.update( this.berry, this.score, this.canvas );
    }

    draw() {
        this.canvas.context.clearRect( 0, 0, this.canvas.element.width, this.canvas.element.height );

        this.snake.draw( this.canvas.context );
        this.berry.draw( this.canvas.context );

    }
}
new Game();