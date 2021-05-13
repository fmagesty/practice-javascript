// https://www.hackerrank.com/challenges/drawing-book/problem?h_r=next-challenge&h_v=zen

function pageCount(n, p) {
  let fromBeginning = 0;
  let fromEnd = 0;
  if (p == 2) {
    return 1;
  }
  for (let i = 1; i < p + 1; i++) {
    if (i % 2 == 0) {
      fromBeginning += 1;
    }
  }
  for (let i = n; i > p; i--) {
    if (i % 2 == 0) {
      fromEnd += 1;
    }
  }
  console.log(fromBeginning, fromEnd);
  if (fromBeginning < fromEnd) {
    console.log(fromBeginning);
    return fromBeginning;
  } else {
    console.log(fromEnd);
    return fromEnd;
  }
}

// pageCount(5, 4); // 0
// pageCount(6, 2); // 1
// pageCount(21235, 17); // 8
pageCount(86619, 28906); // 14453
