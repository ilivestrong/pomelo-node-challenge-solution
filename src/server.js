const Hapi = require("@hapi/hapi");
const vision = require("@hapi/vision");

const { PORT, HOST } = require("./server.config");
const { configureRoutes } = require("./routesConfig");
const { configureViews } = require("./viewConfig");
let server;

/**
 * setup server with host and port
 * @returns server | error object
 */
const setup = () => {
  try {
    server = Hapi.Server({
      port: "3000",
      host: HOST,
    });
  } catch (e) {
    console.log(`Server setup: ${e}`);
    return e;
  }
  return server;
}

/**
 * initialize Hapi server, routes, view engine and starts the server.
 * @returns server | error object representing succesfull server initialization. 
 */
const init = async () => {

  try {
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
  } catch (e) {
    console.log(`Server init: ${e}`);
    return e;
  }
  return server;
}

/**
 * kicks off the server
 * @returns server | error object
 */
const start = async () => {
  try {
    if (server) {
      /* start the server */
      await server.start();
      console.log(`Server running at: ${server.info.uri}`);
    }

  } catch (e) {
    console.log(`Server start: ${e}`);
    return e;
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