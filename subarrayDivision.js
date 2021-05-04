// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let total = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (s.length == 1 && m == 1) {
    console.log("array de 1 numero");
    return 1;
  }
  for (let i = 0; i < s.length - 1; i++) {
    let piece = s.slice(i, m + i);
    console.log(piece);
    let sum = piece.reduce(reducer);
    sum == d ? total++ : null;
  }
  console.log(total);
  return total;
}

// birthday([1, 2, 1, 3, 2], 3, 2); // 2
birthday([4], 4, 1); // 2
