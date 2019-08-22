function scoreCalculator(arr) {
  let score = 0;
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      score += 10;
    } else if (arr[i] < 11) {
      score += 5;
    }
  }
  if (
    arr.every(function(value) {
      return value < 5;
    }) === true
  ) {
    score += 100;
  }
  return score;
}

module.exports = scoreCalculator;
