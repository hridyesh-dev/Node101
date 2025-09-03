const mongoose = require('mongoose');
const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Book Title is required'],
        trim:true,
        maxLength:[100,'Book Title can only be 100 cars long']
    },
    author:{
        type:String,
        required:[true,'Author name is required'],
        trim:true,
    },
    year:{
        type:Number,
        required:[true,'Publication year is required'],
        min:[1000,'books must be atleast from year 1000'],
        max:[new Date().getFullYear(),'Books cant be from future time']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('books',BookSchema)
