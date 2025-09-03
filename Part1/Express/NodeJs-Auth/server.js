require('dotenv').config()
const express=require('express')

const authRoutes=require('./routes/authroutes.js')
const homeRoutes=require('./routes/home-routes.js')

const connectToDB = require('./database/db')

const app=express()
const port=process.env.PORT



//middlewares
app.use(express.json())

//mounting auth routes 
app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)

//connect to database 
connectToDB()

app.listen(port,()=>{
    console.log(`SERVER running on port ${port}`);
})

