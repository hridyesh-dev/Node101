const express=require("express");
const app=express();

//aplication level settings

//when we want to set our template engine 
app.set('view engine','ejs')

//routing
app.get("/",(req,res)=>{
    res.send("home page ")
})

app.post('/api/data',(req,res)=>{
    res.json({
        message:"Data received",
        data:req.body
    })
})

//error handling middlewares
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send("some error occurred")
})
