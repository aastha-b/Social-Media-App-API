const router = require("express").Router();
const RequestHandlers = require("../../../functions/posts/likes");

router.put('/like/:userId',(req,res)=>RequestHandlers.likePost(req,res))
router.put('/dislike/:userId',(req,res)=>RequestHandlers.dislikePost(req,res))

module.exports = router