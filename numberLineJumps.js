// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1) {
    console.log("no");
    return "NO";
  }
  if ((x2 - x1) % (v2 - v1) == 0) {
    console.log("yes");
    return "YES";
  } else {
    console.log("no");
    return "NO";
  }
}

kangaroo(0, 3, 4, 2); // yes
kangaroo(0, 2, 5, 3); // no
kangaroo(21, 6, 47, 3); // no
kangaroo(6644, 5868, 8349, 3477); // no
