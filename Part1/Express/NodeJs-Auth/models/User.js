const mongoose=require('mongoose')
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        //username will have unique usernad
        unique:true,
        trim:true,
        // we want email in lowercase
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        //this user will have only have these values 
        //only allow user or admin roles hii ho sakti hai 
        enum:['user','admin'],
        default:"user"//by default user role 


    }
},{timestamps:true})

module.exports=mongoose.model('userrs',UserSchema)