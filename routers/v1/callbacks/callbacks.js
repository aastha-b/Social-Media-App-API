const router = require("express").Router();
const passport = require("passport");

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    successRedirect: "/v1/callback/success",
    failureRedirect: "/v1/callback/fail",
    session: false,
  })
);

router.get(
  "/google",
  passport.authenticate("google", {
    successRedirect: "/v1/callback/success",
    failureRedirect: "/v1/callback/fail",
    session: false,
  })
);

router.get("/fail", (req, res) => res.send("Failed"));
router.get("/success", (req, res) => res.send("Successfully Login"));

module.exports = router;
