//making routes using http module 
const http=require('http')
const server=http.createServer((req,res)=>{
    
    //url is one of the properties of request object
    const url=req.url;
    //url fetch krr liya and abb check karege
    if(url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Welcome to home page");
        console.log("request on home page");
    }
    
    else if(url=='/projects'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("Welcome to Projects page");
        console.log("request on projects page"); 
    }
    
    else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        res.end("Page not found");
        console.log("INVALID REQUEST");
    }
})

const port=3000;
server.listen(port,()=>{
    console.log("SERVER LISTENING TO PORT ,",port);
})