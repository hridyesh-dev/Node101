const express= require('express')

//this app will start a server and will listen to some port 
const app=express()

const port=3000;

//default route 
app.get("/",(req,res)=>{
    res.send(" WELCOME HOME DEV ")
})

app.listen(port,()=>{
    console.log("Server started on Port ",port);
})
