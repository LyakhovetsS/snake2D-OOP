export default class Score {
    constructor(container, score = 0) {
        this.score = score;
        this.scoreHeader = document.createElement('div');
        this.scoreBlock = document.createElement('div');
        this.scoreCount = document.createElement('span');
        this.createBoard();
        container.appendChild(this.scoreHeader);
        this.draw();
    }
    createBoard() {
        this.scoreHeader.setAttribute('class', 'game-header');
        this.scoreBlock.setAttribute('class', 'game-score');
        this.scoreCount.setAttribute('class', 'score-count');
        this.scoreBlock.appendChild(this.scoreCount);
        this.scoreHeader.appendChild(this.scoreBlock);
    }

    incScore() {
        this.score++;
        this.draw();
    }

    setToZero() {
        this.score = 0;
        this.draw();
    }

    draw() {
        this.scoreCount.innerHTML = this.score;
    }
}