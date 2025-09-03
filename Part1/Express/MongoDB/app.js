const mongoose=require('mongoose');
//with the help of connect method we will be able to connect to our db
//THIS FUNCTION WILL RETURN A PROMISE TO US
mongoose.connect(
).then(()=>{
    console.log("DB Connected sucessfully ");
}).catch((e)=>{
    console.log(e.message);
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    isActive:Boolean,
    tags:[String],
    createdAt:{type:Date,default:Date.now}
});

//create user model : ill save all the users in User collection
const User=mongoose.model('User',userSchema)

async function runQueryExamples(){
    try{
        //create a new document , model is our blueprint 
        
        const newUser=await User.create({
            name:"JOhn Doe",
            email:"johndoe@gmail.com",
            age:20,
            isActive:false,
            tags:[ "developer" , "designer" , "engineer" ],
        })
        
        /*
        const newUser=new User({
            name:"Raj",
            email:"sharmaraj01@gmail.com",
            age:20,
            isActive:true,
            tags:[ "developer" , "designer" , "engineer" ],
        })
         */
        //this will save the user
        //await newUser.save()
        console.log("Created new user :",newUser);
        
        //get all users
        //this is used to display users
        //this will display all the users 
        const allUsers= await User.find({})
        console.log("All users : ",allUsers);
        console.log("--------------------------------------------------------------------------------------------");
        //getting data by set criteria
        const getUsersOfActiveFalse=await User.find({
            isActive:false
        })
        console.log(getUsersOfActiveFalse);
    }catch(e){
        console.log("Error :",e);
    }finally{
       await  mongoose.connection.close()
    }
}

runQueryExamples()
//3:23:53