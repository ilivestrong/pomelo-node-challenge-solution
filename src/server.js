const Hapi = require("@hapi/hapi");
const vision = require("@hapi/vision");

const { PORT, HOST } = require("./server.config");
const input = require("./solution-part-1/mapChildNodesToParent");
const { getPaginationLinks, fetchRepos } = require("./solution-part-2/gitReposUtil");

const repoName = "nodejs";
const server = Hapi.Server({
  port: PORT,
  host: HOST,
});

/**
 * define routes and configure Hapi server
 * @returns void
 */
const init = async () => {

  /* Plugin for rendering views as response */
  await server.register(vision);

  /* route to format json */
  server.route({
    method: 'POST',
    path: '/format',
    handler: (request, h) => {
      const inputJSON = request.payload;
      return input(inputJSON).transform();
    }
  });

  /* route to show nodejs github repos */
  server.route({
    method: "GET",
    path: "/repos/{pageNo}",
    handler: async (request, h) => {
      const currentPageNo = request.params.pageNo || 1;
      return h.view("git-repos", {
        results: {
          searchTerm: repoName,
          values: await fetchRepos(repoName, currentPageNo),
          links: getPaginationLinks()
        }
      });
    }
  });

  /* Register views */
  server.views({
    engines: {
      html: require("handlebars")
    },
    path: "./solution-part-2/views",
    layout: "layout",
    relativeTo: __dirname,
  });


  /* kick off the server */
  await server.start();

  console.log(`Server running at http://${HOST}:${PORT}`);
}

/* tap the unhandledRejection event, log the error and let Node exit abnormally. */
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

// start the server
init();