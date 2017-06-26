const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("/", "index");
routes.add("/:lang/", "index");
routes.add("/:lang/header", "header");
routes.add("/:lang/about", "about");
routes.add("/:lang/language", "language");
