const { Schema, model } = require("mongoose");

const blogSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        requiered:true
    },
    coverImageURL:{
        type:String,
        requiered:false,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    }
})


const Blog=model("blog",blogSchema);

module.exports=Blog