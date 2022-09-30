export default class Config {
    constructor(options) {
        this.width = 320;
        this.height = 400;
        this.snakeX = 160;
        this.snakeY = 160;
        this.step = options.step || 0;
        this.maxStep = options.maxStep || 6;
        this.sizeCell = options.sizeCell || 16;
        this.sizeBerry = options.sizeBerry || this.sizeCell / 4;
    }
}