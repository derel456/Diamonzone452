const block = document.getElementById('block1');
const playArea = document.getElementById('playArea');

let offsetX, offsetY;

block.addEventListener('dragstart', (e) => {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

playArea.addEventListener('dragover', (e) => {
  e.preventDefault(); // diperlukan agar bisa drop
});

playArea.addEventListener('drop', (e) => {
  e.preventDefault();
  const x = e.clientX - playArea.getBoundingClientRect().left - offsetX;
  const y = e.clientY - playArea.getBoundingClientRect().top - offsetY;

  // Batasan supaya block nggak keluar
  const maxX = playArea.clientWidth - block.clientWidth;
  const maxY = playArea.clientHeight - block.clientHeight;

  block.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
  block.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
});
