// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?h_r=next-challenge&h_v=zen

function catAndMouse(x, y, z) {
  let resultA = z - x;
  let resultB = z - y;
  x > z ? (resultA = x - z) : null;
  y > z ? (resultB = y - z) : null;
  if (z - resultA > z - resultB) {
    console.log("Cat A");
    return "Cat A";
  }
  if (z - resultB > z - resultA) {
    console.log("Cat B");
    return "Cat B";
  } else {
    console.log("Mouse C");
    return "Mouse C";
  }
}

catAndMouse(1, 2, 3); // Cat B
catAndMouse(1, 3, 2); // Mouse C
