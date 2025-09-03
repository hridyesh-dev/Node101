const express=require('express');
const authMiddleware=require('../middlewares/auth-middleware.js')

const router=express.Router();

//this will only work if user is logged in
router.get("/welcome",authMiddleware,(req,res)=>{
    res.json({
        status:200,
        message:"Welcome to home page"
    })
})

module.exports=router