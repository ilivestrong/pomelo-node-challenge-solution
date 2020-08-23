const Hapi = require("@hapi/hapi");
const vision = require("@hapi/vision");

const { PORT, HOST } = require("./configs/serverConfig");
const { configureRoutes } = require("./configs/routesConfig");
const { configureViews } = require("./configs/viewConfig");
let server;

/**
 * setup server with host and port
 * @returns server | error object
 */
const setup = () => {

  server = Hapi.Server({
    port: PORT,
    host: HOST,
  });

  return server;
}

/**
 * initialize Hapi server, routes, view engine and starts the server.
 * @returns server | error object representing succesfull server initialization. 
 */
const init = async () => {

  // configure server
  setup();

  if (server) {
    /* Plugin for rendering views as response */
    await server.register(vision);

    /* configure routes */
    configureRoutes(server);

    /* configure views */
    configureViews(server);
  }

  return server;
}

/**
 * kicks off the server
 * @returns server | error object
 */
const start = async () => {

  if (server) {
    /* start the server */
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  }

  return server;
}

/* tap the unhandledRejection event, log the error and let Node exit abnormally. */
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

module.exports = {
  init,
  start
}