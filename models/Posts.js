const mongoose=require('mongoose')

const schema=new mongoose.Schema({
        userId:Number,
        description: String,
        title:String,
        image:{},
        likes:Number,
        createdAt:String,
        status:Boolean,
        comments:[{
                userId:Number,
                comment:String
        }]
})

const Post=mongoose.model('Post',schema)
module.exports=Post