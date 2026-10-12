const express = require("express")
const dotenv = require("dotenv")
const postRoutes = require("./routes/post.routes")
dotenv.config()
const app = express()

app.use(express.json())
  app.use("/api/post",postRoutes)
module.exports = app