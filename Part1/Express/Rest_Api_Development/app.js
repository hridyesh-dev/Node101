const express=require('express')
const app=express();

/*
    express middleware 
    Returns middleware that only parses json and 
    only looks at requests where the Content-Type 
    header matches the type option.
*/
app.use(express.json())

//dummy books array
let books=[
    {id:1,title:"Book1"},{id:2,title:"Book2"}
]

// Home/Intro route
app.get("/",(req,res)=>{
    res.json({
        message:"WELCOME TO OUR BOOK STORE API"
    })
})


//get all books
app.get("/get",(req,res)=>{
    res.status(200).json({
        message:"These are our books info...",
        data:books
    })
})

//get book by id
app.get("/get/:id",(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=books.find(book=>book.id===bookId);
    if(book){
        res.status(200).json({
            message:"This is the book we are finding ..",
            data:book
        })
    }else{
        res.status(404).json({
            message:"No book found with the given id",
            data:null
        })
    }
})

//create a new book
app.post("/add",(req,res)=>{
    const newBook={
        id:books.length+1,
        title:`Book${books.length+1}`
    }
    books.push(newBook),
    res.status(200).json({
        message:"new Book added sucessfully",
        data:newBook
    })
})

//update a book : how we will get content from request body
app.put('/update/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const findCurrBook = books.find(bookItem => bookItem.id === bookId);

    if (findCurrBook) {
        findCurrBook.title = req.body.title || findCurrBook.title;
        res.status(200).json({
            message: `Book with id ${bookId} updated successfully`,
            data: findCurrBook
        });
    } else {
        res.status(404).json({
            message: "Book you're trying to update does not exist",
        });
    }
});


app.delete("/delete/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const findIndexOfCurrBoobooks = books.findIndex(item => item.id === bookId);

    if (findIndexOfCurrBoobooks !== -1) {
        const deletedBook = books.splice(findIndexOfCurrBoobooks, 1);
        res.status(200).json({
            message: "Book Deleted Successfully",
            data: deletedBook[0] // return the deleted book object
        });
    } else {
        res.status(404).json({
            message: "Book you're trying to delete does not exist",
        });
    }
});

const port=3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


