const express=require('express')
const app=express()

//logging functionality , log a timestamp everytime you do a request 
const requestTimeStampLogger=(req,res,next)=>{
    //iss se time-stamp MILL GAYA
    const timestamp=new Date().toISOString();

    console.log(`THE TIME OF REQUEST IS ${timestamp} from ${req.method} to ${req.url}`);
    next()
}

app.use(requestTimeStampLogger)


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
