function getTime() {
  const time = new Date();

  const hour = time.getHours();
  const minuate = time.getMinutes();
  const seconds = time.getSeconds();

  return { hour, minuate, seconds };
}

function formatSingle(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

function setClock() {
  const clock = document.querySelector('.clock');
  const hourElm = clock.querySelector('#hour');
  const minuateElm = clock.querySelector('#minuate');
  const secondElm = clock.querySelector('#seconds');
  const { hour, minuate, seconds } = getTime();
  
  hourElm.innerHTML = formatSingle(hour);
  minuateElm.innerHTML = formatSingle(minuate);
  secondElm.innerHTML = formatSingle(seconds);
}

setInterval(setClock, 1000);
