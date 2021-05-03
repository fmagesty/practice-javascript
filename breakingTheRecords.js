// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let highScore = scores[0];
  let lowScore = scores[0];
  let scoreN = [0, 0];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      scoreN[0]++;
    }
    if (scores[i] < lowScore) {
      lowScore = scores[i];
      scoreN[1]++;
    }
  }
  console.log(scoreN);
  return scoreN;
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]); // 2,4
