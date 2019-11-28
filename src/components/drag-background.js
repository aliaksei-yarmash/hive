const background = document.querySelector('#container');
let startCursorPositionX;
let startCursorPositionY;
let startBackgroundPositionX;
let startBackgroundPositionY;

export default function moveBackgroundOnDrag () {
  background.addEventListener('mousedown', e => {
    startCursorPositionX = e.clientX;
    startCursorPositionY = e.clientY;
    startBackgroundPositionX = pixelsToNumber(background.style.backgroundPositionX);
    startBackgroundPositionY = pixelsToNumber(background.style.backgroundPositionY);
    document.addEventListener('mousemove', moveListener);
  });
  
  background.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', moveListener);
    startCursorPositionX = null;
    startCursorPositionY = null;
    startBackgroundPositionX = null;
    startBackgroundPositionY = null;
  });
}

const moveListener = e => {
  const shiftX = e.clientX - startCursorPositionX;
  const shiftY = e.clientY - startCursorPositionY;

  background.style.backgroundPositionX = `${startBackgroundPositionX + shiftX}px`;
  background.style.backgroundPositionY = `${startBackgroundPositionY + shiftY}px`;
};

function pixelsToNumber (str) {
  return parseInt(str.replace('px', ''), 10) || 0;
};
