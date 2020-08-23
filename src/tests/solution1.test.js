const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { beforeEach, afterEach, describe, it } = exports.lab = Lab.script();

describe("Solution 1 test suite", () => {
  it("expect 1===1", () => {
    expect(1 === 1).to.equal(true);
  })
});