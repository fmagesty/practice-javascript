// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

Math.round = function (number) {
  number = number.toString().split(".");
  if (number[1]) {
    return number[1][0] >= 5
      ? (number = Number(number[0]) + 1)
      : Number(number[0]);
  }
  return Number(number);
};

Math.ceil = function (number) {
  number = number.toString().split(".");
  if (number[1]) {
    return Number(number[0]) + 1;
  }
  return Number(number);
};

Math.floor = function (number) {
  number = number.toString().split(".");
  if (number[1]) {
    return Number(number[0]);
  }
  return Number(number);
};

Math.round(7.12); // 7
Math.round(2.49999); // 2
// Math.ceil(7.12); // 7
// Math.floor(7.12); // 8
