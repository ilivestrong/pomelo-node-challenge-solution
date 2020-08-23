const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { beforeEach, afterEach, describe, it } = exports.lab = Lab.script();
const pq = require("proxyquire");

const { getPaginationLinks } = require("../solution-part-2/gitReposUtil");
const { errors: { github } } = require("../configs/errorsConfig");

describe("gitRepoUtil tests", () => {
  const proxyquire = pq.noCallThru();
  let SUT;
  let gitRepoUtilProxy;
  let appConfigStub;

  describe("Github validation tests", () => {
    beforeEach(() => {
      SUT = Object.assign({}, { getPaginationLinks });

      appConfigStub = {
        API_BASE: "testAPI_BASE",
        REPO_NAME: "test",
        RESULTS_PER_PAGE: 500,
        TOTAL_PAGES: 10
      };

      gitRepoUtilProxy = proxyquire("../solution-part-2/gitReposUtil", {
        "../configs/appConfig": appConfigStub
      });
    });

    it("expect INVALID_RESULTS_PER_PAGE error if RESULTS_PER_PAGE IS > 100", () => {
      // Arrange
      let expected = github.INVALID_RESULTS_PER_PAGE;

      // Act
      const fnToTest = gitRepoUtilProxy.getPaginationLinks;

      // Assert 
      expect(gitRepoUtilProxy.getPaginationLinks).to.throw(Error, github.INVALID_RESULTS_PER_PAGE);
    });
  });

  

});

