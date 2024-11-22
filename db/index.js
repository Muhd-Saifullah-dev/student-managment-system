const mongoose=require("mongoose")
const { MONGO_URI } = require("../config/config")
const { DATABASE_NAME } = require("../constant")

const ConnectMongoDb=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${MONGO_URI}/${DATABASE_NAME}`)
        console.log(`MONGO DATABASE CONNECTED || DB HOST :${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("ERROR IN CONNECTION",error)
        process.exit(1)
    }
}

module.exports={
    ConnectMongoDb
}