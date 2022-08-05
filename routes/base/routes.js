const ItemRoutes = require("../ItemsRoutes");
const MainRoute = require("../MainRoute");

module.exports = (app) => {
  app.use("/", MainRoute);
  app.use("/api", MainRoute);
  app.use("/api/items", new ItemRoutes().routes);
};
