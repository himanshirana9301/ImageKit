const express = require("express")
const upload = require("../config/multer.config")
const {createController}= require("../controllers/create.Controller")
 const router = express.Router()


 router.post("/create", upload.single("image"),createController)
 module.exports = router