require('dotenv').config()
const User = require("../models/User");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

//register controller 
const registerUser=async(req,res)=>{
    try{
        
        //get all information from request body
        const {username,email,password,role}=req.body;
        
        //check if user already exists in DB , this will check if either username or email already exists
        const existingUser=await User.findOne({ $or : [ {username} , {email}]})
        
        if(existingUser){
            return res.status(400).json({
                sucess:false,
                message:" User already exists either with same email or name , kindly use another "
            })
        }

        //time to store user in database

        //hash password 
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)

        //create new user and save in db
        const newCreatedUser = new User({
            username,
            email,
            password:hashedPassword,
            role:role||"user"
        })

        await newCreatedUser.save()

        if(newCreatedUser){
            res.status(201).json({
                sucess:true,
                message:"user created sucessfully"
            })
        }else{
            res.status(400).json({
                sucess:false,
                message:"Unable to register user please try again "

            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Error while registering User"
        })
    }
}


//login controller
const loginUser=async(req,res)=>{
    try{
        // get info of username and password from request body 
        const {username,password}=req.body;

        //check if user exists in database 
        const user=await User.findOne({username});
        
        if(!user){
            return res.status(404).json({
                sucess:false,
                message:"User does not exist kindly register first"
            })
        }

        //now match both the passwords if both match then the user is valid 
        const isPasswordMatch= await bcrypt.compare(password,user.password)

        if(!isPasswordMatch){
            return res.status(400).json({
                sucess:false,
                message:"Invalid credentials , password dosent match "
            })
        }

        //create a token based on user info 
        //this will create access token that will hold all the information

        //accesstoken : payload, jwt_secret , expiresIn
        const accessToken=jwt.sign({
            userID:user._id,
            username:user.username,
            role:user.role
        },process.env.JWT_SECRET,{
            expiresIn:'15m'
        })

        res.status(200).json({
            sucess:true,
            message:"Logged in sucessfully",
            accessToken
        })


    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Error while login User"
        })
    }
}

module.exports={registerUser,loginUser}