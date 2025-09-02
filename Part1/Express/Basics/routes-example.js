const express=require("express");
const app=express();

//root route
app.get("/",(req,res)=>{
    res.send("Welcome to home page ")
})

//get all products
app.get("/products",(req,res)=>{
    const products=[
        {id:"1",label:"product 1"},
        {id:"2",label:"product 2"},
        {id:"3",label:"product 3"},
        {id:"4",label:"product 4"}
    ]
    

    res.status(200).json({
        message:"These are your products",
        data:products
    })
})

//get products by id : dynamic routing 
//this is a dynamic api route and this :id is dynamic
//to give a dynamic value to create a dynamic route use :id
//products/2
app.get('/products/:id',(req,res)=>{
    
    const products=[
        {id:1,label:"product 1"},
        {id:2,label:"product 2"},
        {id:3,label:"product 3"},
        {id:4,label:"product 4"}
    ]

    //fetching id from request params
    const productId=parseInt(req.params.id)


    const getSingleProduct = products.find((product) => {
        return product.id === productId;
    });

    if(getSingleProduct){
        res.status(200).json({
            message:"Product found by id",
            data:getSingleProduct
        })
    }
    else{
        res.status(404).json({
            message:"Product cant be found",
            data:null
        })
    }
})

const port=3000;
app.listen(port,()=>{
    console.log("APP IS RUNNING ON PORT ,",port);
})
//1:57:27