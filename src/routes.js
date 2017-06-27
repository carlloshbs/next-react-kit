const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("/", "index");
routes.add("/:lang/", "index");
routes.add("/:lang/about", "about");
