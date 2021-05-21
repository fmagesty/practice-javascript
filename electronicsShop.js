// https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen

function getMoneySpent(keyboards, drives, b) {
  keyboards = keyboards.sort();
  drives = drives.sort();
  let max = -1;
  let arr1 = keyboards;
  let arr2 = drives;
  drives.length > keyboards.length
    ? ((arr2 = keyboards), (arr1 = drives))
    : ((arr2 = drives), (arr1 = keyboards));
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j], max);
      if (arr1[i] + arr2[j] <= b && arr1[i] + arr2[j] > max) {
        max = arr1[i] + arr2[j];
      }
    }
  }
  console.log(max);
  return max;
}

getMoneySpent([3, 1, 3, 3], [5, 2, 8], 10); // 9
// getMoneySpent([40, 50, 60], [5, 8, 12], 60); // 58
// getMoneySpent([5], [4], 5); // -1
