import { getProfit, getCurrency, getCurrencyDate } from "../getData";

describe("Test the repositories", () => {
  test("When getCurrency service is called", async () => {
    const response = await getCurrency({ profitDate: "20180507" });
    expect(response).toEqual(["BTC", "ETC", "LTC"]);
  });

  test("When getCurrencyDate service is called", async () => {
    const response = await getCurrencyDate();
    expect(response).toEqual([
      "20160507",
      "20170507",
      "20180507",
      "20150507",
      "20190507",
      "20140507"
    ]);
  });

  test("When getProfit service is called", async () => {
    const response = await getProfit({
      currency: "BTC",
      profitDate: "20180507"
    });
    expect(response).toEqual({
      BTC: {
        Buy: { price: "34.98", time: "0915" },
        Sell: { price: "37.01", time: "1230" },
        profit: 2.030000000000001
      }
    });
  });
  test("When getProfit service is called with Date", async () => {
    const response = await getProfit({
      currency: "",
      profitDate: "20180507"
    });
    expect(response).toEqual({
      BTC: {
        Buy: { price: "34.98", time: "0915" },
        Sell: { price: "37.01", time: "1230" },
        profit: 2.030000000000001
      },
      ETC: {
        Buy: { price: "1.45", time: "0900" },
        Sell: { price: "2.15", time: "1700" },
        profit: 0.7
      },
      LTC: {
        Buy: { price: "14.32", time: "0930" },
        Sell: { price: "15.03", time: "1245" },
        profit: 0.7099999999999991
      }
    });
  });
});
