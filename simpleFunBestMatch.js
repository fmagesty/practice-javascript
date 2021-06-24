// https://www.codewars.com/kata/58b38256e51f1c2af0000081/train/javascript
function bestMatch(goals1, goals2) {
  console.log(goals1, goals2);
  let diff = goals1[0] - goals2[0];
  let index = 0;
  let topScore = 0;
  for (let i = 0; i < goals1.length; i++) {
    if (goals1[i] - goals2[i] < diff) {
      index = i;
      diff = goals1[i] - goals2[i];
      console.log(
        `${goals1[i]} - ${goals2[i]} = ${diff}, index ${index}. TopScore = ${topScore}`
      );
      topScore = goals2[i];
    }
    if (goals1[i] - goals2[i] === diff && goals2[i] > topScore) {
      index = i;
      topScore = goals2[i];
    }
  }
  console.log(index);
  return index;
}

// bestMatch([6, 4], [1, 2]); // 1
// bestMatch([1], [0]); // 0
// bestMatch([4, 3, 4], [1, 1, 1]); // 1
// bestMatch(
//   [8, 8, 8, 9, 16, 16, 8, 4, 15, 5, 6, 14, 10, 15, 11, 12, 11, 10, 8, 16],
//   [3, 4, 0, 4, 6, 6, 0, 2, 10, 1, 0, 9, 8, 8, 1, 9, 8, 1, 6, 10]
// ); // 12
// bestMatch(
//   [8, 9, 12, 9, 12, 17, 12, 16, 6, 8, 14, 14, 13, 20, 5, 13, 5, 19],
//   [2, 6, 5, 2, 9, 9, 10, 6, 1, 6, 7, 9, 7, 10, 2, 7, 4, 10]
// ); // 16
// bestMatch([1, 14, 6, 13, 11, 19, 8, 13], [0, 10, 2, 7, 1, 9, 3, 4]); // 0
// bestMatch(
//   [17, 5, 11, 5, 4, 5, 9, 10, 14, 2, 5, 13, 7, 7, 1, 6, 13],
//   [10, 4, 6, 4, 3, 0, 7, 0, 8, 1, 2, 6, 1, 5, 0, 3, 5]
// ); // 1
bestMatch(
  [18, 10, 11, 11, 2, 1, 18, 13, 6, 17, 15, 2, 17, 8, 8, 4],
  [10, 3, 3, 5, 0, 0, 10, 3, 1, 7, 10, 1, 10, 6, 7, 2]
); // 14
