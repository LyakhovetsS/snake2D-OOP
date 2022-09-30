export default class Canvas {
    constructor(container, {width,height}) {
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'canvas-wrapper');
        this.element = document.createElement("canvas");
        this.context = this.element.getContext("2d");
        this.element.width = width;
        this.element.height = height;
        this.wrapper.appendChild(this.element);
        container.appendChild(this.wrapper);
    }
}