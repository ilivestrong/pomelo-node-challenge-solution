const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { before, beforeEach, afterEach, describe, it } = exports.lab = Lab.script();
const sinon = require("sinon");

const {
  validInputJSON,
  invalidInputJSON,
  invalidInputZeroRootElementJSON
} = require("./testingdata");

const input = require("../solution-part-1/mapChildNodesToParent");

describe("fetchRepo() tests suite", () => {
  let SUT = Object.assign({}, { input });
  let inputSpy;

  beforeEach(() => {
    inputSpy = sinon.spy(SUT, "input");
  });

  afterEach(() => {
    inputSpy.restore();
  })

  it("expect error incase there are more than 1 root elements", () => {
    // Arrange
    var inputJSON = invalidInputJSON;

    // Act
    try {
      SUT.input(inputJSON).transform();
    } catch (e) { }

    // Assert
    expect(inputSpy.threw());
  });

  it("expect error incase there are zero root elements", () => {
    // Arrange
    var inputJSON = invalidInputZeroRootElementJSON;

    // Act
    try {
      SUT.input(inputJSON).transform();
    } catch (e) { }

    // Assert
    expect(inputSpy.threw());
  });

  it("expect formatted output JSON with valid input", () => {
    // Arrange
    var inputJSON = validInputJSON;

    // Act
    const result = SUT.input(inputJSON).transform();

    // Assert
    expect(result.length > 1);

  });
});

