const router = require("express").Router();
const RequestHandlers = require("../../../functions/posts/comments");

router.post('/add/:userId',(req,res)=>RequestHandlers.addComment(req,res))
router.delete('/delete/:userId',(req,res)=>RequestHandlers.deleteComment(req,res))

module.exports = router