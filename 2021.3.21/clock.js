class Flipper {
  isFlipping = false;
  duration = 550;
  flipNode;
  frontNode;
  backNode;

  constructor(node, currentTime, nextTime) {
    this.flipNode = node;
    this.frontNode = node.querySelector('.front');
    this.backNode = node.querySelector('.back');
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
  }

  setFrontTime(time) {
    this.frontNode.dataset.number = time;
  }
  setBackTime(time) {
    this.backNode.dataset.number = time;
  }

  flipDown(currentTime, nextTime) {
    if (this.isFlipping) {
      return false;
    }

    this.isFlipping = true;
    this.setFrontTime(currentTime);
    this.setBackTime(nextTime);
    this.flipNode.classList.add("running");
    setTimeout(() => {
      this.flipNode.classList.remove("running");
      this.isFlipping = false;
      this.setFrontTime(nextTime);
    }, this.duration);
  }
}

function getTimeFromDate(date) {
  return date.toTimeString().slice(0, 8).split(":").join("");
}

let flips = document.querySelectorAll('.flip');
let now = new Date();
let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
let nextTimeStr = getTimeFromDate(now);
let Flippers = Array.from(flips).map((flip, i) => {
  return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
});

setInterval(() => {
  let now = new Date();
  let nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
  let nextTimeStr = getTimeFromDate(now);
  for (var i = 0; i < Flippers.length; ++i) {
    if (nowTimeStr[i] === nextTimeStr[i]) {
      continue;
    }
    Flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
  }
}, 1000);

