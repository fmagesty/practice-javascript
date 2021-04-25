// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let totalNoMax;
  let totalNoMin;

  if (arr[0] === max && arr[1] === max) {
    arr.shift(max);
    totalNoMax = arr.reduce((acc, total) => acc + total);
  }
  if (arr[0] === min && arr[1] === min) {
    totalNoMin = arr.reduce((acc, total) => acc + total);
  } else {
    let maxFiltered = arr.filter((num) => num !== max);
    totalNoMax = maxFiltered.reduce((acc, total) => acc + total);
    let minFiltered = arr.filter((num) => num !== min);
    totalNoMin = minFiltered.reduce((acc, total) => acc + total);
  }
  console.log(totalNoMax, totalNoMin);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([5, 5, 5, 5, 5]);
miniMaxSum([793810624, 895642170, 685903712, 623789054, 468592370]);
