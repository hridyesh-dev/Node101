const Book=require('../models/book.js')

/*------------------------------------------------------------------------------------------------------------*/


const getAllBooks= async(req,res)=>{
    try{
        const allBooks= await Book.find({})
        if(allBooks?.length>0){
            res.status(200).json({
                sucess:true,
                message:"List of books fetched sucessfully",
                data:allBooks
            })
        }else{
            res.status(404).json({
                sucess:false,
                message:"No collection found in DB"
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Some Error Occurred please try again . "
        })
    }
}


/*------------------------------------------------------------------------------------------------------------*/


const singleBook= async(req,res)=>{
    try{
        const getCurrBookId=req.params.id;
        const singleBook= await Book.findById(getCurrBookId);
        if(!singleBook){
            res.status(404).json({
                sucess:false,
                message:"Book with current id not found "
            })
        }
        res.status(200).json({
            sucess:true,
            message:`Book of id ${getCurrBookId} found`,
            data:singleBook
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Some Error Occurred please try again . "
        })
    }
}


/*------------------------------------------------------------------------------------------------------------*/


// fetch everything title , author , year 
const addNewBook= async(req,res)=>{
    //request ki body se data laao
    try {
        const newBookForData=req.body;
        const newlyCreatedBook=await Book.create(newBookForData)
        if(newlyCreatedBook){
            res.status(201).json({
                sucess:true,
                message:"Book added sucessfully",
                data:newlyCreatedBook
            })
        }
    }catch(error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Some Error Occurred please try again . "
        })
    }
}


/*------------------------------------------------------------------------------------------------------------*/


const updateBook= async(req,res)=>{
    try{
        const updateBookId=req.params.id;
        const updatedData=req.body
        //findByIdAndUpdate( id , updated data , new:true ) it will return the updated book back 
        const updatedBook=Book.findByIdAndUpdate(updateBookId,updatedData,{new:true})

        if(!updateBook){
            res.status(404).json({
                sucess:false,
                message:'Book you want to update not found'
            })
        }else{
                res.status(202).json({
                sucess:true,
                message:'Book data updated ',
                data:updatedBook
            })
        }

    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Some Error Occurred please try again . "
        })
    }
}


/*------------------------------------------------------------------------------------------------------------*/


const deleteBook= async(req,res)=>{
    try{
        const deleteBookId=req.params.id;
        //jo book delete hui uska data aa jaaye ga 
        const deleteBook=await Book.findByIdAndDelete(deleteBookId);
        if(deleteBook){
            res.status(200).json({
                sucess:true,
                message:"Book deleted sucessfully",
                data:deleteBook
            })
        }else{
            res.status(404).json({
                sucess:false,
                message:`Book of id ${deleteBookId} not found . `
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            sucess:false,
            message:"Some Error Occurred please try again . "
        })
    }
}


/*------------------------------------------------------------------------------------------------------------*/

module.exports={getAllBooks,singleBook,addNewBook,updateBook,deleteBook} 