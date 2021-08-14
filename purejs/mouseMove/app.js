import { Background } from './background.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.background = new Background(this.stageHeight / 4, this.stageWidth/2, this.stageHeight/2);
    

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.context.scale(2, 2);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.context.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.background.draw(this.context);
  }
}

window.onload = () => {
  new App();
}