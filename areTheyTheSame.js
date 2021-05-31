// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(a1, a2) {
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  return (
    a1
      .map((x) => x * x)
      .sort()
      .toString() === a2.sort().toString()
  );
}

// comp(
//   [121, 144, 19, 161, 19, 144, 19, 11],
//   [231, 14641, 20736, 361, 25921, 361, 20736, 361]
// ); // false
// comp(
//   [121, 144, 19, 161, 19, 144, 19, 11],
//   [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// ); // false
comp([7, 0, 9, 2, 0, 7, 6, 0, 0, 1, 7], [1, 0, 1, 49, 36, 0, 4, 0, 81, 49, 49]); // false
