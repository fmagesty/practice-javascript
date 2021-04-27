//www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  const higherN = Math.max(...candles);
  console.log(higherN);
  const bigCandles = candles.filter((num) => num === higherN);
  console.log(bigCandles);
  return bigCandles.length;
}

birthdayCakeCandles([3, 2, 1, 3]);
