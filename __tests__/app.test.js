let app = require("../app")
let request = require("supertest");

describe("basic testing existing routes on the app.js", () => {
  test("GET --> should pass", () => {
    return request(app).get("/").expect(200);
  });

  test("GET animal page--> should pass", () => {
    return request(app).get("/animals/").expect(200);
  });

  test("GET biologal order page --> should pass", () => {
    return request(app).get("/bioorders/").expect(200);
  });

  test("GET attributes page --> should pass", () => {
    return request(app).get("/attributes/").expect(200);
  });

  test("GET animal instances page --> should pass", () => {
    return request(app).get("/animalinstances/").expect(200);
  });

  test("GET --> animal does not exist", () => {
    return request(app).get("/sdfadsfar").expect(404);
  });
});
