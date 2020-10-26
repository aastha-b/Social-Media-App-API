const router = require("express").Router();
const passport = require("passport");

router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

module.exports = router;
