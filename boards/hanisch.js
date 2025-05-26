// Hanisch Bingo Board JS
// Uses wordPool2 from fieldGenerator.js
window.onload = function() {
  document.getElementById('generateButton').onclick = function() {
    window.generateBingoBoard(window.bingoWordPools.wordPool2);
  };
  // Generate initial board
  window.generateBingoBoard(window.bingoWordPools.wordPool2);
};
