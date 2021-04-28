// www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen

function timeConversion(s) {
  s = s.split(":");
  s[0] >= 12 ? (s[0] = "00") : (s[0] = s[0]);
  console.log(s);
  s[2][2] === "P" ? (s[0] = Number(s[0]) + 12) : (s[0] = s[0]);
  console.log(s);
  s = s.join(":").slice(0, -2);
  console.log(s);
  return s;
}

timeConversion("12:40:22AM");
