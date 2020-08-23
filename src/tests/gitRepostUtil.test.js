const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { beforeEach, describe, it } = exports.lab = Lab.script();
const pq = require("proxyquire");

const { errors: { github } } = require("../configs/errorsConfig");

describe("gitRepoUtil tests suite", () => {
  const proxyquire = pq.noCallThru();

  describe("Github validation tests", () => {

    it("expect INVALID_RESULTS_PER_PAGE error if RESULTS_PER_PAGE IS > 100", () => {
      // Arrange
      const appConfigStub = {
        API_BASE: "testAPI_BASE",
        REPO_NAME: "test",
        RESULTS_PER_PAGE: 5000,
        TOTAL_PAGES: 10
      };
      let expected = github.INVALID_RESULTS_PER_PAGE;
      const gitRepoUtilProxy = proxyquire("../solution-part-2/gitReposUtil", {
        "../configs/appConfig": appConfigStub
      });

      // Act
      const fnToTest = gitRepoUtilProxy.getPaginationLinks;

      // Assert 
      expect(gitRepoUtilProxy.getPaginationLinks).to.throw(Error, expected);
    });

    it("expect INVALID_TOTAL_PAGES error if TOTAL_PAGES IS < 0 or not provided", () => {
      // Arrange
      const appConfigStub = {
        API_BASE: "testAPI_BASE",
        REPO_NAME: "test",
        RESULTS_PER_PAGE: 50,
        TOTAL_PAGES: -1
      };
      let expected = github.INVALID_TOTAL_PAGES;
      const gitRepoUtilProxy = proxyquire("../solution-part-2/gitReposUtil", {
        "../configs/appConfig": appConfigStub
      });

      // Act
      const fnToTest = gitRepoUtilProxy.getPaginationLinks;

      // Assert 
      expect(gitRepoUtilProxy.getPaginationLinks).to.throw(Error, expected);
    });
  });

  it("expect success and page links length to be equal to 50, when TOTAL_PAGES input value = 50", () => {
    // Arrange
    const appConfigStub = {
      API_BASE: "testAPI_BASE",
      REPO_NAME: "test",
      RESULTS_PER_PAGE: 10,
      TOTAL_PAGES: 50
    };

    const gitRepoUtilProxy = proxyquire("../solution-part-2/gitReposUtil", {
      "../configs/appConfig": appConfigStub
    });

    // Act
    const pageLinks = gitRepoUtilProxy.getPaginationLinks();

    // Assert 
    expect(pageLinks.length === appConfigStub.TOTAL_PAGES).to.be.equal(true);
  });
});
