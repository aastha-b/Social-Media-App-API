const Post = require('../../models/Posts')

module.exports={
    addComment: async(req,res)=>{
        newComment={
            userId:req.body.userId,
            comment:req.body.comment
        }
        Post.updateOne({userId:req.params.userId},
            {$push:{
                comments:newComment
                   }
        },
        (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('new Comment Added')
            }
        })
        Post.find({userId:req.params.userId},(err,post)=>{
            if(err){
                console.log(err)
            }else{
                res.send(post)
            }
        })
    },
    deleteComment: async(req,res)=>{
        Post.updateOne({ userId:req.params.userId},
            {$pull:{
                comments: { _id:req.body.id }
                   }
        },
        { multi: true },
        (err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('Comment Deleted')
            }
        })
        Post.find({ userId:req.params.userId },(err,post)=>{
            if(err){
                console.log(err)
            }else{
                res.send(post)
            }
        })
    }
}