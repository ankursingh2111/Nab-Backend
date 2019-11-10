import data from "../__mock__/inputData";

export async function getCurrency(params) {
  const { profitDate } = params;
  const currArray = [];
  // eslint-disable-next-line no-unused-vars
  const currArray1 = Object.keys(data).map(curr => {
    const dates = Object.keys(data[curr].date);
    if (dates.indexOf(profitDate) !== -1) {
      currArray.push(curr);
    }

    return curr;
  });
  return new Promise(resolve => resolve(currArray));
}

export async function getProfit(params) {
  const { currency, profitDate } = params;
  let currencyArr = [];
  if (!currency) {
    currencyArr = await getCurrency({ profitDate });
  } else {
    currencyArr.push(currency);
  }
  const profitObject = {};
  // eslint-disable-next-line array-callback-return
  currencyArr.map(curr => {
    const currencyData = data[curr];
    const profitData = currencyData.date[profitDate];
    let minPriceIndex = 0;
    let minPrice = profitData[0].price;

    profitObject[curr] = {};

    let maxProfitVal = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < profitData.length; i++) {
      if (profitData[i].price - minPrice > maxProfitVal) {
        maxProfitVal = profitData[i].price - minPrice;
        profitObject[curr].Buy = {
          price: profitData[minPriceIndex].price,
          time: profitData[minPriceIndex].time
        };
        profitObject[curr].Sell = {
          price: profitData[i].price,
          time: profitData[i].time
        };
        profitObject[curr].profit = maxProfitVal;
      }
      if (profitData[i].price < minPrice) {
        minPrice = profitData[i].price;
        minPriceIndex = i;
      }
    }
  });
  return new Promise(resolve => resolve(profitObject));
}

export async function getCurrencyDate() {
  let dateArray = [];
  // eslint-disable-next-line no-unused-vars
  const dateArray1 = Object.keys(data).map(curr => {
    const dates = Object.keys(data[curr].date);
    dateArray.push(...dates);

    return dateArray;
  });
  dateArray = [...new Set(dateArray)];
  return new Promise(resolve => resolve(dateArray));
}
