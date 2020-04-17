let gameMode;
const sketchPad = document.querySelector('.sketch-pad');
const blackButton = document.querySelector('#black-button');
const colorButton = document.querySelector('#color-button');
const resetButton = document.querySelector('#reset-button');

blackButton.addEventListener('click', () => {
  reset();
  gameMode = 0;
  run();
  console.log();
});

colorButton.addEventListener('click', () => {
  reset();
  gameMode = 1;
  run();
});

resetButton.addEventListener('click', () => {
  reset();
});

function run() {
  const size = prompt('How many pixels will your grid have?');
  createGrid(size);
}

function createGrid(size) {
  let cellSize = 640 / size;


  for(i = 1; i <= size; i++) {
    let br = document.createElement('br');
    for(j = 1; j <= size; j++){
      let newCell = document.createElement('div');
      let alpha = 0.1;
      newCell.style.width = `${cellSize}px`;
      newCell.style.height = `${cellSize}px`;
      newCell.style.backgroundColor = `#FFF`;
      newCell.style.border = `1px solid #FCFCFC`;
      newCell.style.display = 'inline-block';

      if(gameMode == 0) {
        blackMode(newCell, alpha)
      } else if(gameMode == 1) {
        colorMode(newCell);
      }

      sketchPad.appendChild(newCell);
    }
    sketchPad.appendChild(br);
  }
}

function blackMode(newCell, alpha) {
  newCell.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = `rgb(0, 0, 0, ${alpha})`;
    alpha += 0.1;
  });
}

function colorMode(newCell) {
  newCell.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = `${'#'+Math.floor(Math.random()*16777215).toString(16)}`;
  });
}

function reset() {
  const divGrid = document.querySelectorAll('.sketch-pad > div, br');

  divGrid.forEach((e) => {
    sketchPad.removeChild(e);
  });
}
