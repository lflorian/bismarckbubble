// Frommeyer Bingo Board JS
// Uses wordPool3 from fieldGenerator.js
window.onload = function() {
  document.getElementById('generateButton').onclick = function() {
    window.generateBingoBoard(window.bingoWordPools.wordPool3);
  };
  // Generate initial board
  window.generateBingoBoard(window.bingoWordPools.wordPool3);
};
