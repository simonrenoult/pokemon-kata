const { describe, it, expect, request } = require("../utils");

describe("GET /fight-prediction", () => {
  describe("When A is missing", () => {
    it("returns 400", async () => {
      const { statusCode } = await request.get(
        "/fight-prediction?pokemonBId=2"
      );
      expect(statusCode).to.equal(400);
    });
  });

  describe("When B is missing", () => {
    it("returns 400", async () => {
      const { statusCode } = await request.get(
        "/fight-prediction?pokemonBId=1"
      );
      expect(statusCode).to.equal(400);
    });
  });

  describe("When A and B are missing", () => {
    it("returns 400", async () => {
      const { statusCode } = await request.get("/fight-prediction");
      expect(statusCode).to.equal(400);
    });
  });

  describe("When A and B have the same weight", () => {
    it("returns 204", async () => {
      const { statusCode } = await request.get(
        "/fight-prediction?pokemonAId=1&pokemonBId=1"
      );
      expect(statusCode).to.equal(204);
    });
  });

  describe("When A and B are provided", () => {
    it("returns the winner", async () => {
      const {
        body: { id }
      } = await request.get("/fight-prediction?pokemonAId=1&pokemonBId=2");
      expect(id).to.equal(2);
    });
  });
});
