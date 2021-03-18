import {
  WaveGroup
} from './WaveGroup.js'

// reference https://www.youtube.com/watch?v=LLfhY4eVwDY
class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stagedWidth = document.body.clientWidth;
    this.stagedHeight = document.body.clientHeight;

    this.canvas.width = this.stagedWidth * 2;
    this.canvas.height = this.stagedHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stagedWidth, this.stagedHeight)
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stagedWidth, this.stagedHeight);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
}
