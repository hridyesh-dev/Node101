require('dotenv').config
const mongoose=require('mongoose')
const connectToDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MongoDB_URI}`)
        console.log("DataBase connected Sucessfully");
    }catch(error){
        console.error("Error connecting to Database",error);
        process.exit(1)
    }

}
module.exports=connectToDB