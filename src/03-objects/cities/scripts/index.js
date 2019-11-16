import psc from "./psc.js"

// vertical flexbox mover
const handler = document.querySelector('.handler');
const wrapper = handler.closest('.wrapper');
const boxA = wrapper.querySelector('.box1');
const boxB = wrapper.querySelector('.box2');
let isHandlerDragging = false;

    document.addEventListener('mousedown', function(e) {
        // If mousedown event is fired from .handler, toggle flag to true
        if (e.target === handler) {
            isHandlerDragging = true;
        }
    });

    document.addEventListener('mousemove', function(e) {
        // Don't do anything if dragging flag is false
        if (!isHandlerDragging) {
            return false;
        }

        e.preventDefault();

        // Get offset
        let containerOffsetTop= wrapper.offsetTop;
        let containerOffsetBottom= wrapper.offsetBottom;


        // Get x-coordinate of pointer relative to container
        let pointerRelativeXpos = e.clientY - containerOffsetTop;
        let pointerRelativeXpos2 = e.clientY - e.offsetTop + e.offsetHeight;


        let boxAminWidth = 30;



        boxA.style.height = (Math.max(boxAminWidth, pointerRelativeXpos - 2)) + 'px';
        boxB.style.height = (Math.max(boxAminWidth, pointerRelativeXpos2 - 8)) + 'px';
    });
    document.addEventListener('mouseup', function(e) {
        // Turn off dragging flag when user mouse is up
        isHandlerDragging = false;
    });

// horizontal flexbox mover
    const handlerVertical = document.querySelector('.handlerVertical');
const wrapperVertical = handlerVertical.closest('.wrapperVertical');
const boxAVertical = wrapperVertical.querySelector('.boxVertical');
let isHandlerDraggingVertical = false;

document.addEventListener('mousedown', function(e) {
  // If mousedown event is fired from .handler, toggle flag to true
  if (e.target === handlerVertical) {
    isHandlerDraggingVertical = true;
  }
});

document.addEventListener('mousemove', function(e) {
  // Don't do anything if dragging flag is false
  if (!isHandlerDraggingVertical) {
    return false;
  }

  // Get offset
  let containerOffsetLeft = wrapperVertical.offsetLeft;

  // Get x-coordinate of pointer relative to container
  let pointerRelativeXpos = e.clientX - containerOffsetLeft;
  
  // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
  let boxAminWidth = 60;

  // Resize box A
  // * 8px is the left/right spacing between .handler and its inner pseudo-element
  // * Set flex-grow to 0 to prevent it from growing
  boxAVertical.style.width = (Math.max(boxAminWidth, pointerRelativeXpos - 8)) + 'px';
  boxAVertical.style.flexGrow = 0;
});

document.addEventListener('mouseup', function(e) {
  // Turn off dragging flag when user mouse is up
  isHandlerDraggingVertical = false;
});