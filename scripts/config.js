export default class Config {
    constructor(options) {
        this.step = options.step || 0;
        this.maxStep = options.maxStep || 6;
        this.sizeCell = options.sizeCell || 16;
        this.sizeBerry = options.sizeBerry || this.sizeCell / 4;
    }
}