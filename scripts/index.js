class Game {
    constructor() {
        console.log('test');
        this.container = document.getElementById('game');
        if(!this.container){
            const gameDiv = document.createElement('div');
            gameDiv.setAttribute('id','game');
            document.body.appendChild(gameDiv);
        }
    }
}
new Game()