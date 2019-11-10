import supertest from "supertest";
import app from "../../../index";
import callApi from "../../services/api";

jest.mock("../../services/api");

let server;
let request;

beforeAll(async () => {
  server = await app(8000);
  request = supertest(server);
});

afterAll(() => {
  return new Promise(resolve => server.close(resolve));
});

beforeEach(() => {
  callApi.mockReset();
});
describe("Check the incoming requests", () => {
  test("When request is made to correct endpoint with required parameters", async () => {
    callApi.mockReturnValue("Everything is good");
    const res = await request.get(
      "/api/getProfit?currency=BTC&profitDate=20191111"
    );
    // expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual("Everything is good");
  });
  test("When request is made to non exisitng endpoint", async () => {
    callApi.mockRejectedValueOnce(new Error("Unknown API: getProfitable"));
    const res = await request.get(
      "/api/getProfitable?currency=BTC&profitDate=20191111"
    );
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({
      error: "Not found",
      reason: "Unknown API: getProfitable"
    });
  });
});
