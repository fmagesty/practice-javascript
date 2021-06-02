// https://www.codewars.com/kata/55b4d87a3766d9873a0000d4/train/javascript

function howmuch(m, n) {
  console.log(m, n);
  let max = n;
  let min = m;
  let result = [];
  if (m > n) {
    max = m;
    min = n;
  }
  for (let i = min; i < max + 1; i++) {
    let x = Math.round(i / 7);
    let y = Math.round(i / 9);
    if (i - 7 * x == 2 && i - 9 * y == 1) {
      result.push([`M: ${i}`, `B: ${x}`, `C: ${y}`]);
    }
  }
  console.log(result);
  return result;
}

howmuch(1, 100); // [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
howmuch(1000, 1100); // [[\'M: 1045\', \'B: 149\', \'C: 116\']]
