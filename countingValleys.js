// https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=next-challenge&h_v=zen

function countingValleys(steps, path) {
  let seaLevel = 0;
  let valleys = 0;
  for (const el in path) {
    path[el] == "U" ? (seaLevel += 1) : (seaLevel -= 1);
    if (seaLevel == -1 && path[el] == "D") {
      valleys += 1;
    }
  }
  console.log(valleys);
  return valleys;
}

countingValleys(8, "UDDDUDUU"); // 1
