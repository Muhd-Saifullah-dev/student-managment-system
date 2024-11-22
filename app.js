const express=require("express")
const app=express()
const reqResInspector=require("express-req-res-inspector")
const { globaleErrorMiddleware } = require("./middleware/globalError.middleware")



app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({
    limit:"16kb",
    extended:true
}))
app.use(express.static("public"))
app.use(reqResInspector())
app.use(globaleErrorMiddleware)


module.exports=app
