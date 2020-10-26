const router = require("express").Router();
const Auth = require("./auth/auth");
const Callback = require("./callbacks/callbacks");

//user handlers...
router.use("/user/profile", require("./users/profile"));
router.use("/user/post", require("./users/posts"));
router.use("/user/post/react-post",require('./users/likes'))
router.use("/user/post/comment",require('./users/comment'))
//authentication handlers...
router.use("/authenticate", Auth);

//callbacks...
router.use("/callback", Callback);

module.exports = router;
