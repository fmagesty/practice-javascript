// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let maca = 0;
  let laranja = 0;
  let distance = [s, t];
  let appleMap = apples.map((item) => item + a);
  let orangeMap = oranges.map((item) => item + b);
  maca = appleMap.filter((item) => item >= distance[0] && item <= distance[1]);
  laranja = orangeMap.filter(
    (item) => item >= distance[0] && item <= distance[1]
  );
  console.log(maca.length);
  console.log(laranja.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); //
