// https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let months = 0;
  let savings = startPriceOld;

  if (startPriceOld >= startPriceNew) {
    console.log([months, startPriceOld - startPriceNew]);
    return [months, Math.round(startPriceOld - startPriceNew)];
  }
  while (savings < startPriceNew) {
    savings += savingperMonth;
    savings -= (startPriceOld * percentLossByMonth) / 100;
    startPriceOld -= (startPriceOld * percentLossByMonth) / 100;
    startPriceNew -= (startPriceNew * percentLossByMonth) / 100;
    months++;
    if (months % 2 !== 0) {
      percentLossByMonth += 0.5;
    }
    console.log(months, percentLossByMonth, savings - startPriceNew);
  }
  console.log([months, Math.round(savings - startPriceNew)]);
  return [months, Math.round(savings - startPriceNew)];
}

nbMonths(2000, 8000, 1000, 1.5); // [6, 766]
// nbMonths(12000, 8000, 1000, 1.5); // [0, 4000]
