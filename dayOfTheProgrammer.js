// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  if (year <= 1917) {
    if (year % 4 === 0) {
      console.log("12.09." + year);
      return "12.09." + year;
    } else {
      console.log("13.09." + year);
      return "13.09." + year;
    }
  }
  if (year > 1918) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      console.log("12.09." + year);
      return "12.09." + year;
    } else {
      console.log("13.09." + year);
      return "13.09." + year;
    }
  }
  if (year == 1918) {
    console.log("26.09." + year);
    return "26.09." + year;
  }
}

dayOfProgrammer(2017); // 13.09.2017
dayOfProgrammer(1918); // 26.09.1918
dayOfProgrammer(1917); // 13.09.1918
