const Models = require(__dirname + "/../../models/Profile");
const Post = require("../../models/Posts");

var day = new Date();

module.exports = {
  createPosts: async (req, res) => {
    var fileinfo = req.file;
    console.log(fileinfo);
    console.log(req.description);
    const newPost = new Post({
      userId:req.body.userId,
      description: req.body.description,
      likes: 0,
      image: fileinfo,
      comments: [],
      title: req.title,
      createdAt :
        day.getDate() +
        " " +
        Number(day.getMonth() + 1) +
        " " +
        day.getFullYear(),
      status: true,
    });

    newPost.save((err)=>{
      if(err){
        console.log(err)
      }else{
        console.log('New Post Added')
      }
    })
    res.send(newPost);
  },
  deletePost: async (req, res) => {
    Post.updateOne({ _id: req.body.id}, {status: false}, (err)=>{
      if(err){
        console.log(err)
      }else{
        res.send("Deleted Post");
      }
    });
   
  },
};
