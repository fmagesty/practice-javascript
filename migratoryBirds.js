// https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen

function migratoryBirds(arr) {
  let sorted = arr.sort();
  let id = sorted[0];
  let maxN = 1;
  let counter = 0;

  for (let i = 0; i < sorted.length; i++) {
    counter = sorted[i] === sorted[i - 1] ? counter + 1 : 0;
    if (counter > maxN) {
      id = sorted[i];
      maxN = counter;
    }
  }
  console.log(id);
  return id;
}

migratoryBirds([1, 4, 4, 4, 5, 3]); // 4
migratoryBirds([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5]); // 3
