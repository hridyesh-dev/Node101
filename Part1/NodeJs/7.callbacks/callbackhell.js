const fs=require('fs')
fs.readFile('input.txt',"utf-8",(err,data)=>{

    if(err){
        console.log("error aa gaya",err);
        return;
    }
    console.log("data in input file : ",data);
    const modifyFileData=data.toUpperCase()

    console.log("===================================================================");
    
    fs.writeFile('output.txt',modifyFileData,(err)=>{
    
        if(err){
            console.log("error aa gaya while writing");
            return;
        }
    
        console.log("data written to the new file",modifyFileData);
        console.log("===================================================================");
    
        fs.readFile('output.txt','utf-8',(err,data)=>{
            if(err){
                console.log("error reading output file ");
                return;
            }
            console.log("data from output file : ",data);
        })
        console.log("==================================================================");
        
    })


})