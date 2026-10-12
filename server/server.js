const app =require("./src/app")
const connectDb = require("./src/config/db.config")

connectDb()
app.listen(3000,()=>{
    console.log("server is running")
})