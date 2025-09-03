// all values of dotenv will be loaded into process object
require('dotenv').config()
const bookRoutes=require("./routes/book-routes")
const express=require('express');
const connectToDB = require('./database/db');

const app=express();
const port=process.env.PORT || 4000
console.log(port);

//connect to our db 
connectToDB()

//using middleware used to parse json info
app.use(express.json())

//mounting routes
app.use('/api/books',bookRoutes)

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})
