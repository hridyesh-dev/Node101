const http =require('http');
//req will have all the payload and res will carry response
const server = http.createServer((req,res)=>{
    console.log("requset : ",req);
    //used to pass all the stuff like status code and stuff
    res.writeHead(200,{
        "content-type":"text.plain"
    })
    //used to send output
    res.end("Hello Node js from http module")
})

//server will listen to some port 
const port=3000;
server.listen(port,()=>{
    console.log("SERVER STARTED AND IS LISTENING ON PORT, ",port);
})



