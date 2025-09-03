require('dotenv').config()
const mongoose=require('mongoose')
const connectToDB=async()=>{
    try {
        await mongoose.connect(process.env.Mongo_URL)
        console.log("Mongo Db Connected sucessfully");
    }catch(error){
        console.log("Some error occurred while connecting database");
        process.exit(1)
    }
}

module.exports=connectToDB