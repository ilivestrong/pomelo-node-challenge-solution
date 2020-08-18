const Hapi = require("@hapi/hapi");

const { PORT, HOST } = require("./server.config");

const init = async () => {
  const server = Hapi.Server({
    port: PORT,
    host: HOST,
  });

  server.route({
    method: 'POST',
    path: '/format',
    handler: (request, h) => {
      const inputJSON = request.payload;
      return inputJSON;
    }
  });

  await server.start();
  console.log(`Server running at http://${HOST}:${PORT}`);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();