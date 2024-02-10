function bowlingScore(totalThrows) {
  let score = 0;
  let currentThrow = 0;
  let frames = 0;

  while (currentThrow < totalThrows.length) {
    if (totalThrows[currentThrow] === 10) {
      score += 10 + strikeBonus(totalThrows, currentThrow);
      frames++;
      currentThrow++;
    } else if (totalThrows[currentThrow] + (totalThrows[currentThrow + 1] || 0) === 10) {
      score += 10 + spareBonus(totalThrows, currentThrow);
      frames++;
      currentThrow += 2;
    } else {
      score += normalFrameScore(totalThrows, currentThrow);
      frames++;
      currentThrow += 2;
    }

    if (frames === 10) break;
  }

  return score;
}

function strikeBonus(totalThrows, currentThrow) {
  return (
    (totalThrows[currentThrow + 1] || 0) + (totalThrows[currentThrow + 2] || 0)
  );
}

function spareBonus(totalThrows, currentThrow) {
  return totalThrows[currentThrow + 2] || 0;
}

function normalFrameScore(totalThrows, currentThrow) {
  return (
    (totalThrows[currentThrow] || 0) + (totalThrows[currentThrow + 1] || 0)
  );
}

module.exports = bowlingScore;
