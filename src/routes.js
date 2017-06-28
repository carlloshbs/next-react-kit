// exports.aboutList = function(req, res) {
// res.render("users", { title: "Users", users });
// };

const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("/", "/", "/index");
routes.add("/about", "/it/about", "about");
