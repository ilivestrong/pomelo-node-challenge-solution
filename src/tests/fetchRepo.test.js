const Lab = require("@hapi/lab");
const { expect } = require("@hapi/code");
const { before, beforeEach, afterEach, describe, it } = exports.lab = Lab.script();
const pq = require("proxyquire");
const sinon = require("sinon");

const { errors: { github } } = require("../configs/errorsConfig");
const { getOctokitInstance } = require("../solution-part-2/OctokitWrapper.js");
const {
  NodeJSRepoSampleResponse,
} = require("./testingdata");

describe("fetchRepo() tests suite", () => {
  const proxyquire = pq.noCallThru();
  let OctokitWrapper;
  let gitRepoUtilProxy;

  before(() => {
    OctokitWrapper = Object.assign({}, { getOctokitInstance });
  })

  describe("Happy Path test", () => {
    let getOctokitInstanceStub;

    beforeEach(() => {
      getOctokitInstanceStub = sinon
        .stub(OctokitWrapper, "getOctokitInstance")
        .returns({
          request: (route, options) => NodeJSRepoSampleResponse
        });
    });

    afterEach(() => {
      getOctokitInstanceStub.restore();
    });

    it("expect success", async () => {
      // Arrange
      const appConfigStub = {
        API_BASE: "testAPI_BASE",
        REPO_NAME: "test",
        RESULTS_PER_PAGE: 10,
        TOTAL_PAGES: 10,
        REPO_NAME: "nodejs"
      };

      gitRepoUtilProxy = proxyquire("../solution-part-2/gitReposUtil", {
        "../configs/appConfig": appConfigStub,
        "./OctokitWrapper": OctokitWrapper
      });

      // Act
      const repos = await gitRepoUtilProxy.fetchRepos(appConfigStub.REPO_NAME, 10);

      // Assert 
      expect(repos[0].id).to.equal(NodeJSRepoSampleResponse.data.items[0].id);
    });
  });
});