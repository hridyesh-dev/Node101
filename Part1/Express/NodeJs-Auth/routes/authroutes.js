const express=require('express');
const { registerUser, loginUser } = require('../controllers/auth-controllers');
const router=express.Router();

//all routes are related to authN and authZ
router.post("/register",registerUser)
router.post("/login",loginUser)

module.exports=router