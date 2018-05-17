const { expect } = require("chai");
const { describe, it } = require("mocha");
const server = require("../src/server");
const supertest = require("supertest");

const request = supertest(server);

module.exports = {
  request,
  expect,
  describe,
  it
};
