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

//create user model : ill save all the users in User(collection name in our DB )
const User=mongoose.model('User',userSchema)

async function runQueryExamples(){
    try{
        //create a new document , model is our blueprint 
        //to create a new user model is the main entry point
        
        const newUser= await User.create({
            name:"Updated User",
            email:"updatedUser@gmail.com",
            age:35,
            isActive:true,
            tags:[ "developer" , "designer" , "engineer" ]
            //created at will be taken from default value
        })
        
        
        /*
            Another way to create user 
            const newUser=new User({
                name:"Raj",
                email:"sharmaraj01@gmail.com",
                age:20,
                isActive:true,
                tags:[ "developer" , "designer" , "engineer" ],
            })
            
            this will save the user
            await newUser.save()

            when a user is created we will get the _id 
            in our newly created user object , mongo db wull give this id property
        */
        console.log("Created new user :",newUser);
        
        //get all users
        //this will display all the users 
        const allUsers= await User.find({})
        console.log("All users : ",allUsers);
        console.log("--------------------------------------------------------------------------------------------");
        
        //getting data by set criteria
        /*

        const getUsersOfActiveFalse=await User.find({
            isActive:false
        })

        console.log(getUsersOfActiveFalse);

        */
        // findOne: Will give the first matching document that matches the criteria
        /*
        
        //finding by name
            const getJohnDoe=await User.findOne({name:'JOhn Doe'})
            console.log(getJohnDoe);
        */

        // GETTING LAST CREATED USER BY USER ID 
        //const get_Last_Created_User_By_UserID= await User.findById(newUser._id)
        //console.log("------------------------------------------------------------------------------------------------------------------");
        //console.log("the last created user by userId is : ",get_Last_Created_User_By_UserID);
        /*
            when we only want to show the only specific property 
            like name and email property but not id property
            with the help of select property we can do that 
        */
        /*
        const selectedFields= await User.find().select('name email -_id')
        console.log(selectedFields);
        */

        /*
            LIKE IF we are applying pagination and we want to 
            skip the first two items how we can do that
        */
        /*
            const limitedUsers=await User.find().limit(5).skip(1)
            console.log(limitedUsers);
        */
        /*Like if we have to print users in a sorted order for ascending:1  , descending:1 */
        /*
            const sortedUsers=await User.find().sort({age:-1})
            console.log(sortedUsers);
        */

        /*
            How we can count the number of documents , if there is a situation 
            like count the number of users where is active is true
        */
        const ActiveUsers=await User.countDocuments({isActive:true})
        console.log("nuber of active users is : ",ActiveUsers);

        /*id , What Property That We Want To Update ,
        and new objects  and that will return the updated document*/
        const updatedUser=await User.findByIdAndUpdate(newUser._id,{
            $set:{age:100},
            $push:{tags:'updated'}//tag array mai push karna 
        },{new:true})
        console.log(updatedUser);
        
    }catch(e){
        console.log("Error :",e);
    }finally{
        await  mongoose.connection.close()
    }
}

runQueryExamples()
