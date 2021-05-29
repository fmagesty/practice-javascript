// https://www.codewars.com/kata/5432fd1c913a65b28f000342/train/javascript

function multiplicationTable(row, col) {
  let table = [];
  console.log(row, col);
  // make the row array
  arr = new Array(col);
  for (let i = 1; i < col + 1; i++) {
    arr.fill(i, i - 1, col + 1);
  }
  table.push(arr);
  // now make an array for each row
  for (let i = 2; i < row + 1; i++) {
    let arrMap = arr.map((n) => n * i);
    console.log(arrMap);
    table.push(arrMap);
  }
  console.log(table);
  return table;
}

// multiplicationTable(2, 2); // '[[1, 2], [2, 4]]
// multiplicationTable(3, 3); // [[1, 2, 3],[2, 4, 6],[3, 6, 9]]
multiplicationTable(2, 5); //[[1, 2, 3, 4, 5],[2, 4, 6, 8, 10]];
