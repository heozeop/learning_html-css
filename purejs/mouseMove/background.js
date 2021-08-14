export class Background {
  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  draw(context) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
    context.fill();
  }
}