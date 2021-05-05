const clickPosition = {
  top: 0,
  lefT: 0
}

function move(element, position) {
  element.style.left = `${position.left - clickPosition.left}px`;
  element.style.top = `${position.top -clickPosition.top}px`;
}

/**
 * mouse move 
 */


function onMouseDown(event) {
  clickPosition.left = event.offsetX;
  clickPosition.top = event.offsetY;

  const dragables = document.querySelectorAll('.draggable');
  addDragEvent(dragables[0])
}

function onMouseUp(event) { 
  const dragables = document.querySelectorAll('.draggable');
  addDragEvent(dragables[0])
}

/**
 *  dragging
 */

function addDragEvent(element) {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('drag', dragging);
  element.addEventListener('dragend', dragEnd);
}
function removeDragEvent(element) {
  element.removeEventListener('dragstart', dragStart);
  element.removeEventListener('drag', dragging);
  element.removeEventListener('dragend', dragEnd);
}

function dragStart(ev) {
  console.log('dragStart');
  ev.dataTransfer.dropEffect = 'move';
}

function dragging(ev) {
  // console.log('dragging')
  
  // console.log(position);
}

function dragEnd(ev) {
  // console.log(ev);
  console.log('dragend')
  const dragables = document.querySelectorAll('.draggable');
  const position = {
    top: ev?.pageY,
    left: ev?.pageX
  }
  move(dragables[0], position);
}

function dragOver(ev) {
  // console.log('dragover')
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
}

function onDrop(ev) {
  console.log('ondrop');
  ev.preventDefault();

  const dragables = document.querySelectorAll('.draggable');
  ev.target.appendChild(dragables[0]);
}

window.addEventListener('DOMContentLoaded', () => {
  const background = document.querySelector('.background');
  background.addEventListener('dragover', dragOver);
  background.ondrop = onDrop;  
  // drag event

  const dragables = document.querySelectorAll('.draggable');
  dragables[0].addEventListener('mousedown', onMouseDown);
  dragables[0].addEventListener('mouseup', onMouseUp);
});

