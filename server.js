const app=require("./app")
const {PORT}=require("./config/config")
const { ConnectMongoDb } = require("./db")
const rootRouter=require("./routes/root.router")

ConnectMongoDb()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on Port : ${PORT}`)
        app.use("/api/v1",rootRouter)
    })
})
.catch((error)=>{
    console.log("mongo db error is catch",error)
})
