// https://www.hackerrank.com/challenges/magic-square-forming/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function formingMagicSquare(s) {
  let cost = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const magicNumber = (
    (s[0].reduce(reducer) + s[1].reduce(reducer) + s[2].reduce(reducer)) /
    3
  ).toFixed(0);
  console.log(magicNumber);
  console.log(s[2].reduce(reducer));
}

formingMagicSquare([
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
]);
