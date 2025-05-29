const boardSize = 9;
const board = document.getElementById('game-board');
let cells = [];

// Inisialisasi papan
for (let i = 0; i < boardSize * boardSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
  cells.push(cell);
}

// Fungsi acak tempatkan blok 1x1 ke posisi kosong
function placeRandomBlock() {
  const emptyIndices = cells
    .map((cell, index) => (!cell.classList.contains('filled') ? index : null))
    .filter((i) => i !== null);

  if (emptyIndices.length === 0) {
    alert('Game Over! Tidak ada ruang kosong.');
    return;
  }

  const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  cells[randomIndex].classList.add('filled');

  checkAndClearLines();
}

// Cek apakah ada baris/kolom penuh
function checkAndClearLines() {
  // Cek baris
  for (let row = 0; row < boardSize; row++) {
    let rowFilled = true;
    for (let col = 0; col < boardSize; col++) {
      if (!cells[row * boardSize + col].classList.contains('filled')) {
        rowFilled = false;
        break;
      }
    }
    if (rowFilled) {
      for (let col = 0; col < boardSize; col++) {
        cells[row * boardSize + col].classList.remove('filled');
      }
    }
  }

  // Cek kolom
  for (let col = 0; col < boardSize; col++) {
    let colFilled = true;
    for (let row = 0; row < boardSize; row++) {
      if (!cells[row * boardSize + col].classList.contains('filled')) {
        colFilled = false;
        break;
      }
    }
    if (colFilled) {
      for (let row = 0; row < boardSize; row++) {
        cells[row * boardSize + col].classList.remove('filled');
      }
    }
  }
         }
