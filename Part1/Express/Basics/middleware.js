const express=require('express')
const app=express()

// define middleware function 
const myFirstMiddleware=(req,res,next)=>{
    console.log("THIS FIRST MIDDLEWARE WILL RUN ON EVERY REQUEST ");
    //some validations 
    next();//this will call next method/middleware in the stack 
}

//mounting middleware on the app ,using this middleware everytime 
app.use(myFirstMiddleware) 

app.get("/",(req,res)=>{
    console.log("Home Page");
    res.send("Welcome home hri")
})

app.get("/about",(req,res)=>{
    console.log("About Page");
     res.send("Welcome to ABOUT hri")
})

app.listen(3000,()=>{
    console.log("SERVER RUNNING ON PORT 3000");
})
