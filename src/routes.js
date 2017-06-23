const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("/", "/:lang/");
routes.add("about", "/:lang/about");
