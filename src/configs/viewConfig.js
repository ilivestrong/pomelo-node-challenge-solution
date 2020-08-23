module.exports.configureViews = (server) => {
  server.views({
    engines: {
      html: require("handlebars")
    },
    path: "../solution-part-2/views",
    layout: "layout",
    relativeTo: __dirname,
  });
}