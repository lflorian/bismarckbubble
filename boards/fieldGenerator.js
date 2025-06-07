// Word Pool Manns
const wordPool1 = [
  "Premium-Tafelbild",
  "früher Schluss machen",
  "vorbereiteter Unterricht",
  "unvorbereiteter Unterricht",
  "keine Hausaufgaben",
  "unleserliches Wort",
  "Honest Opinion",
  "nennt falschen Namen",
  "Vergleich zur Tellkampfschule",
  "ausschweifende Geschichte",
  "Organisatorisches",
  "Störung des eigenen Unterrichts",
  "Sprühen von Glasfee",
  "iPad leer",
  "iPad muss geladen werden",
  "Elefantengriff zum Trinken",
  "Handy wird eingesammelt",
  "Handy wird nicht eingesammelt",
  "Kippeln mit dem Stuhl",
  "Baut sein Handy auseinander",
  "Stift gegeben Stirn",
  "Verlässt den eigenen Unterricht",
  "Geschichte aus dem Lehrerzimmer",
  '"Premium"',
  '"Bismarck-Gesamtschule"',
  '"Bismarck-Bubble"',
  '"Fuck the Rich"',
  '"Schule ist keine Demokratie"',
  '"Çüş"',
  '"Faktencheck"',
  '"yallah"',
  '"boah alter"',
  '"wir kommen zu garnichts heute"',
  '"ene mene muh"',
  '"Das Leben ist hart und die Schule bereitet darauf vor"',
  '"Spoiler"',
  '"Ich raste aus"',
  '"Leben ist Leiden sagt Buddha"',
  '"Dullis"',
  '"Wir müssen was schaffen heute"',
  '"Ich sage bewusst jein"',
  '"Das wird ein Fest"',
  '"Man weiß es nicht"',
  '"Gesunder Menschenverstand"',
  '"Billige Punkte"',
  '"Hustlen"',
  '"Es wird doch alles gut"',
  '"hochwertig"',
  '"eiskalt"',
  "Erwähnung Hanisch",
  "Erwähnung Kuhlemann",
  "Erwähnung Begemann",
  "Erwähnung Baxmann",
  "Ich möchte diesen Teppich nicht kaufen"
];

// Word Pool Hanisch
const wordPool2 = [
  ""
];

// Word Pool Frommeyer
const wordPool3 = [
  "Gelingensbedingungen",
  "Beziehungslernen",
  "inneres Team",
  "freudvoll",
  "Zaungäste",
  "Professionalisierung",
  "Tool",
  "Performance Simulator",
  "Vier Ohren",
  "Transparenz",
  "Paradigmenwechsel",
  "Wertschätzung",
  "weggerutscht",
  "gleichwohl",
  "systemisch",
  "ich freute mich sehr",
  "wuchtig",
  "Architektur",
  "aufgleisen",
  "präjudizieren",
  "nobilitieren",
  "aufschlagen",
  "wuppen",
  "vertanzen",
  "heilen",
  "Expertise",
  "Low Hanging Fruits",
  "Spirit",
  "Beziehungslernen",
  "Intus hoch drei",
  "Your fixe"
];

/**
 * Generates a bingo board (table) filled with random, non-repeating words from a word pool.
 * @param {string[]} wordPool - The array of words to use for the bingo board.
 * @param {number} size - The number of rows/columns (default 5 for 5x5 board).
 * @param {string} tableId - The id of the table element to fill.
 */

function generateBingoBoard(wordPool, size = 4, tableId = 'bingoTable') {
  const table = document.getElementById(tableId);
  if (!table) return;
  // Shuffle a copy of the word pool
  const shuffled = wordPool.slice().sort(() => Math.random() - 0.5);
  const boardWords = shuffled.slice(0, size * size);
  let html = '';
  for (let row = 0; row < size; row++) {
    html += '<tr>';
    for (let col = 0; col < size; col++) {
      const idx = row * size + col;
      html += `<td data-row="${row}" data-col="${col}">${boardWords[idx] || ''}</td>`;
    }
    html += '</tr>';
  }
  table.innerHTML = html;

  // Add click-to-highlight and win detection
  Array.from(table.getElementsByTagName('td')).forEach(td => {
    td.onclick = function() {
      td.classList.toggle('highlighted');
      checkBingoWin(size, table);
    };
  });

  // Hide win message on new board
  const winMsg = document.getElementById('winMessage');
  if (winMsg) winMsg.style.display = 'none';
}

function checkBingoWin(size, table) {
  // Build a 2D array of highlighted state
  const cells = Array.from(table.getElementsByTagName('td'));
  const board = Array.from({length: size}, () => Array(size).fill(false));
  cells.forEach(td => {
    const row = parseInt(td.getAttribute('data-row'));
    const col = parseInt(td.getAttribute('data-col'));
    if (td.classList.contains('highlighted')) {
      board[row][col] = true;
    }
  });

  // Check rows and columns
  for (let i = 0; i < size; i++) {
    if (board[i].every(Boolean)) showWinMessage();
    if (board.map(row => row[i]).every(Boolean)) showWinMessage();
  }
  // Check diagonals
  if (board.map((row, i) => row[i]).every(Boolean)) showWinMessage();
  if (board.map((row, i) => row[size - 1 - i]).every(Boolean)) showWinMessage();
}



let winToastTimeout = null;
function showWinMessage() {
  const winMsg = document.getElementById('winMessage');
  if (!winMsg) return;
  // Show toast with fade-in
  winMsg.style.display = 'block';
  setTimeout(() => {
    winMsg.style.opacity = '1';
  }, 10);

  // Clear any previous timeout
  if (winToastTimeout) clearTimeout(winToastTimeout);
  winToastTimeout = setTimeout(() => {
    hideWinMessage();
  }, 2500);

  // Add close button handler (idempotent)
  const closeBtn = document.getElementById('closeWinMessage');
  if (closeBtn && !closeBtn._handlerSet) {
    closeBtn.onclick = function(e) {
      e.stopPropagation();
      hideWinMessage();
    };
    closeBtn._handlerSet = true;
  }
}

function hideWinMessage() {
  const winMsg = document.getElementById('winMessage');
  if (!winMsg) return;
  winMsg.style.opacity = '0';
  setTimeout(() => {
    winMsg.style.display = 'none';
  }, 500); // fade out duration
}

// Export for use in other scripts
window.bingoWordPools = { wordPool1, wordPool2, wordPool3 };
window.generateBingoBoard = generateBingoBoard;

