const LOAD_SIZE = 10;
let currentIndex = 0;
let lastChild;

function createItems() {
  const fragment = document.createDocumentFragment();
  for (let i = currentIndex; i < currentIndex + LOAD_SIZE; i += 1) {
    const item = document.createElement('p')

    item.classList.add('item');
    item.textContent = `#${i}`
    item.style.height = '30px';
    
    fragment.appendChild(item);
  }

  document.body.querySelector('#items').appendChild(fragment);
  currentIndex += LOAD_SIZE;
  lastChild = document.body.querySelector('#items').lastElementChild;
}

const intersectionObserver =  new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        createItems();
    });
});

intersectionObserver.observe(document.getElementById('trigger'));
createItems();
