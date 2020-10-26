const router = require("express").Router();
const Requesthandlers = require("../../../functions/users/index");
const AuthMiddleware = require("../../../middlewares/auth");

router.get("/", (req, res) => Requesthandlers.handleGet(req, res));
router.post("/signup", (req, res) => Requesthandlers.handlePost(req, res));
router.delete("/:userId", AuthMiddleware.authorise, (req, res) =>
  Requesthandlers.handleDelete(req, res)
);
router.put("/:type/:userId", AuthMiddleware.authorise, (req, res) =>
  Requesthandlers.handleUpdate(req, res)
);
module.exports = router;
