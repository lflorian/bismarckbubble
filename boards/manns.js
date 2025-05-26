// Manns Bingo Board JS
// Uses wordPool1 from fieldGenerator.js
window.onload = function() {
  document.getElementById('generateButton').onclick = function() {
    window.generateBingoBoard(window.bingoWordPools.wordPool1);
  };
  // Generate initial board
  window.generateBingoBoard(window.bingoWordPools.wordPool1);
};
