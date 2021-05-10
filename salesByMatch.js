// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  let pairs = 0;
  ar.sort();
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
    if (ar.indexOf(ar[i]) == ar.indexOf(ar[i + 1])) {
      ar[i + 1] = 0;
      pairs += 1;
    }
  }
  console.log(pairs);
  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
