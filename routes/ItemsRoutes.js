const itemController = require("../controllers/item");
const { Router } = require("express");

const router = Router();

class ItemRoutes {
  get routes() {
    router.get("/", itemController.getItems);
    router.get("/:id", itemController.getItem);
    return router;
  }
}

module.exports = ItemRoutes;
