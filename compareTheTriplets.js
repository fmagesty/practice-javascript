// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  let points = [0, 0];
  for (let i = 0; i < a.length; i++) {
    console.log(a[i], b[i]);
    if (a[i] > b[i]) {
      points[0] += 1;
    }
    if (b[i] > a[i]) {
      points[1] += 1;
    }
    console.log(points);
  }
  return points;
}

compareTriplets([5, 6, 7], [3, 6, 10]); // [1,1]
