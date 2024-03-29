const input = require("../solution-part-1/mapChildNodesToParent");
const { getPaginationLinks, fetchRepos } = require("../solution-part-2/gitReposUtil");
const { API_BASE, REPO_NAME } = require("./appConfig");

module.exports.configureRoutes = (server) => {
  const links = getPaginationLinks();

  server.route({
    method: 'POST',
    path: `/${API_BASE}/format`,
    handler: (request, h) => {
      const inputJSON = request.payload;
      return input(inputJSON).transform();
    }
  });
  server.route({
    method: "GET",
    path: `/${API_BASE}/repos/{pageNo}`,
    handler: async (request, h) => {
      const currentPageNo = request.params.pageNo || 1;
      const repoName = REPO_NAME || "nodejs";

      return h.view("git-repos", {
        results: {
          searchTerm: repoName,
          values: await fetchRepos(REPO_NAME, currentPageNo),
          links
        }
      });
    }
  });

  server.route({
    method: '*',
    path: '/{any*}',
    handler: function (request, h) {
      return h.view("404");
    }
});
}