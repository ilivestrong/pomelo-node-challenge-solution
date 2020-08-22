const Hapi = require("@hapi/hapi");
const vision = require("@hapi/vision");

const { PORT, HOST } = require("./server.config");
const { configureRoutes } = require("./routesConfig");
const { configureViews } = require("./viewConfig");

const server = Hapi.Server({
  port: PORT,
  host: HOST,
});

/**
 * setup Hapi server, routes, view engine and starts the server.
 * @returns void
 */
const init = async () => {

  /* Plugin for rendering views as response */
  await server.register(vision);

  /* configure routes */
  configureRoutes(server);

  /* configure views */
  configureViews(server);

  /* kick off the server */
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
}

/* tap the unhandledRejection event, log the error and let Node exit abnormally. */
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

// kick off Hapi server setup and start
init();