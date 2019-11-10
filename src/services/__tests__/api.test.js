import callApi from "../api";
import {
  getProfit,
  getCurrency,
  getCurrencyDate
} from "../../repositories/getData";

jest.mock("../../repositories/getData");

describe("Test the different services", () => {
  test("When get currency service is called", async () => {
    getCurrency.mockResolvedValueOnce(["BTC"]);
    const response = await callApi("getCurrency", { date: "20180507" });
    expect(response).toEqual(["BTC"]);
  });
  test("When getcurrencyDate service is called", async () => {
    getCurrencyDate.mockResolvedValueOnce(["20180507"]);
    const response = await callApi("getCurrencyDate");
    expect(response).toEqual(["20180507"]);
  });
  test("When getProfit service is called", async () => {
    getProfit.mockResolvedValueOnce({ BTC: { price: "24" } });
    const response = await callApi("getProfit");
    expect(response).toEqual({ BTC: { price: "24" } });
  });
  test("When non exisiting service is called", async () => {
    expect(callApi("getProfitable")).rejects.toThrow("Unknown API");
  });
});
