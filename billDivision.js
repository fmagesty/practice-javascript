// https://www.hackerrank.com/challenges/bon-appetit/problem?h_r=next-challenge&h_v=zen

function bonAppetit(bill, k, b) {
  bill.splice(bill.indexOf(bill[k]), 1);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  bill = bill.reduce(reducer) / 2;
  if (bill == b) {
    console.log("Bon Appetit");
  } else {
    let change = b - bill;
    console.log(change);
  }
}

bonAppetit([3, 10, 2, 9], 1, 12); // 5
bonAppetit([3, 10, 2, 9], 1, 7); // Bon Appetit
