const Hapi = require("@hapi/hapi");

// override port number and host name via config file.
const { PORT, HOST } = require("./server.config");

/**
 * define routes and configure Hapi server
 * @returns void
 */
const init = async () => {
  const server = Hapi.Server({
    port: PORT,
    host: HOST,
  });

  /* route to format json */
  server.route({
    method: 'POST',
    path: '/format',
    handler: (request, h) => {
      const inputJSON = request.payload;
      return inputJSON;
    }
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