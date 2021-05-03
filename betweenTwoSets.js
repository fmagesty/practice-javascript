// https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  let totalX = 0;

  for (let x = 1; x <= 100; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        totalX++;
      }
    }
  }
  console.log(totalX);
  return totalX;
}

getTotalX([2, 4], [16, 32, 96]); // return 3

// Explanation

// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.
