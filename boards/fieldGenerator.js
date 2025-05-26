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
  "freute (ich freute mich sehr)",
  "Wucht / wuchtig",
  "Architektur"
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
      html += `<td>${boardWords[idx] || ''}</td>`;
    }
    html += '</tr>';
  }
  table.innerHTML = html;
  // Add click-to-highlight
  Array.from(table.getElementsByTagName('td')).forEach(td => {
    td.onclick = () => td.classList.toggle('highlighted');
  });
}

// Export for use in other scripts
window.bingoWordPools = { wordPool1, wordPool2, wordPool3 };
window.generateBingoBoard = generateBingoBoard;

