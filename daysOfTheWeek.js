const whichDay = (s, k) => {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  let finalDay;
  for (let i = 0; i <= k + days.indexOf(s); i++) {
    if (i == 6) {
      k = k - i;
      i = 0;
    }
    finalDay = days[i];
  }
  console.log(finalDay);
  return finalDay;
};

// whichDay("wed", 2); // fri
whichDay("sat", 23); // fri
