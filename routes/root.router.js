const {Router}=require("express")
const userRouter=require("../routes/user.router")

const rootRouter=Router()

rootRouter.use("/user",userRouter)


module.exports=rootRouter