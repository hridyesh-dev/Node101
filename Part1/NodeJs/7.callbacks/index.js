const fs=require('fs');

//A function which is given as an argument to another function
function person(name,locationn,callbackFn){
    console.log("Hello !",name);
    callbackFn(locationn)
}

function address(location){
    console.log("im from ",location);
}

person('Hridyesh',"Jammu",address)

fs.readFile("input.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(data);
    
})