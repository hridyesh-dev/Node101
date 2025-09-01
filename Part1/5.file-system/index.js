const fs=require("fs");
const path=require("path");

const dataFolder=path.join(__dirname,'data');


// Async way to create file 
const asyncFilepath=path.join(dataFolder,"example-async.txt");
fs.writeFile(asyncFilepath,"Hello Async Node Js",(err)=>{
    if(err) console.log(err.message);
    console.log("Async file is created sucessfully");

    fs.readFile(asyncFilepath,'utf-8',(err,data)=>{
        if(err)console.log(err.message);
        console.log("Async file content :",data);
    })

    fs.appendFile(asyncFilepath,'\n this is new content',(err)=>{
        if(err)throw err;
        console.log("NEW LINE ADDED TO FILE ");
    })

    fs.readFile(asyncFilepath,'utf-8',(err,data)=>{
        if(err)throw err
        console.log("Updated file content",data);
    })

})


//Sync way of file module
//if data folder exists
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("Data folder created");
}

const filepath=path.join(dataFolder,"example.txt");

//syncronous file creation and writing data in it
fs.writeFileSync(filepath,"Hello from node js")
console.log("File created Sucessfully");

//reading content from file in a  syncronous way
const readContentFromFile= fs.readFileSync(filepath,'utf-8')
console.log("file content : ",readContentFromFile);

//adding data into file in a syncronous way
fs.appendFileSync(filepath,'\n THIS IS THE NEW CONTENT ADDED TO THE FILE WITH THE HELP OF APPEND FILE')
console.log("Content added to the file");
