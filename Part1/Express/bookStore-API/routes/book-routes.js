const express=require('express');
const { getAllBooks, singleBook, addNewBook, updateBook, deleteBook } = require('../controllers/book-controller');

//creating express router
const  router=express.Router()

//all the routes related to books

// getting all books
router.get("/get" , getAllBooks )

//getting book by id
router.get("/get/:id" , singleBook)

//adding new book
router.post("/add" , addNewBook)

//updating book
router.put("/update/:id" , updateBook)

// deleting book
router.delete("/delete/:id" , deleteBook)

module.exports=router