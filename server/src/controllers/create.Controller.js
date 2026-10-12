const postModel = require("../models/post.model")
const sendFiles = require("../services/storage.service")
const  createController= async(req,res)=>{
        console.log("contol reached")
        
    const {caption}  = req.body
    const file = req.file
    console.log(file)
    if(!caption|| !file) return res.status(400).json({
        success:false,
        message:"field is required"
    })
  
    console.log("caption:",caption)
     console.log("file:",!!file)
   console.log("upload start")

   try{
    const uploadImage= await sendFiles(file.buffer,file.originalname)
console.log("after upload")
    const post = await postModel.create({
caption,
image: uploadImage.url

    })
}catch(error){
    console.log( "error is ",error)
    return res.status(201).json({
        message:"post created",
        error: error.message
    })
}}
module.exports = {createController}