const router = require("express").Router();
const RequestHandlers = require("../../../functions/posts/posts");
var multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, myfile, callback) => {
    //console.log(__dirname + '\\..\\..\\..\\user-data\\posts')
    callback(null, __dirname + '\\..\\..\\..\\user-data\\posts');
  },
  filename: (req, file, callback) => {
    callback(null, new Date().toISOString().replace(/:/g, '-') + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/create", upload.single("myfile"), (req, res) =>
  RequestHandlers.createPosts(req, res)
);
router.delete("/delete", (req, res) =>
  RequestHandlers.deletePost(req, res)
);

module.exports = router;
