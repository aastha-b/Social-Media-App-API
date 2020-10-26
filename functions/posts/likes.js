const Post = require("../../models/Posts");

module.exports={
    likePost: async(req,res)=>{
        Post.findOneAndUpdate({userId:req.params.userId},
            {$inc:{'likes':1}},
            (err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log('like updated')
                }
            }
            )
            
        Post.find({userId:req.params.userId},(err,post)=>{
            if(err){
                console.log(err)
            }else{
                res.send(post)
            }
        })
    },
    dislikePost:  async(req,res)=>{
        Post.findOneAndUpdate({'userId':req.params.userId,'likes':{"$gt":0}},
            {$inc:{'likes':-1}},
            (err)=>{
                if(err){
                    console.log(err)
                }
                else{
                    console.log('dislike updated')
                }
            }
            )
            
        Post.find({userId:req.params.userId},(err,post)=>{
            if(err){
                console.log(err)
            }else{
               res.send(post)
            }
        })
    }
}