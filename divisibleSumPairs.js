// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        total += 1;
        console.log(ar[i], ar[j]);
      }
    }
  }
  console.log(total);
  return total;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]); //5
