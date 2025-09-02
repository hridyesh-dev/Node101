const express= require('express')
const path=require('path')
 
const app=express()

//set the view engine as Ejs 
app.set('view engine','ejs')

//set the directory for the views 
app.set('views',path.join(__dirname,'views'))

//dummpy data 
//we need to pass this data , so that in homepage we can render this list of products 
const products=[
    {id:1,title:"product1"},
    {id:2,title:"product2"},
    {id:3,title:"product3"}
];

app.get("/",(req,res)=>{
    //i want to render my home and im passing these values 
    res.render('home',{title:'Home',products:products})
});


app.get("/about",(req,res)=>{
    res.render('about',{title:'About page'})
})

const port=3000

app.listen(port,()=>{
    console.log(` Server running on port ${port}`);
})