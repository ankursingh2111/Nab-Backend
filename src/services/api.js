import {
  getProfit,
  getCurrency,
  getCurrencyDate
} from "../repositories/getData";

export default async function callApi(serviceName, params) {
  let currencyData;

  switch (serviceName) {
    case "getProfit":
      currencyData = await getProfit(params);
      break;
    case "getCurrency":
      currencyData = await getCurrency(params);
      break;
    case "getCurrencyDate":
      currencyData = await getCurrencyDate(params);
      break;
    default:
      throw new Error(`Unknown API: ${serviceName}`);
  }
  return currencyData;
}
