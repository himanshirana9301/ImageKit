const Imagekit = require ("@imagekit/nodejs")
const { URLEndpoints } = require("@imagekit/nodejs/resources/accounts/url-endpoints.js")
const dotenv = require("dotenv")
dotenv.config()
console.log("url",process.env.IK_URL)
console.log(" publicurl",process.env.IK_PUBLIC_KEY)
console.log(" pRIVATE curl",process.env.IK_PRIVATE_KEY)

const storageInstance = new Imagekit({
urlEndpoint:process.env.IK_URL,
publicKey:process.env.IK_PUBLIC_KEY,
privateKey:process.env.IK_PRIVATE_KEY
})

const sendFiles =async (file,fileName)=>{
    const obj ={
        file,
        fileName,
        folder:"imagkit"
    }
    try{
     console.log("imagekit respond i")    
 const result = await storageInstance.files.upload(obj)
 console.log("imagekit respond")
 return result
}
catch(error){
    console.log("imagekit error is",error)
}}
module.exports=sendFiles