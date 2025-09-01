function delayFn(time){
    return new Promise((res,rej)=>{
        setTimeout(res,time)
    })
}


async function delayedGreet(name){
    console.log("Async Await execution started");
    await delayFn(2000);
    console.log(` Hi ${name}`);
    console.log("Execution ended after delay");
}

delayedGreet("User")

//error handling async await 
async function division(num1,num2) {
    try{
        if(num2==0){
            throw new Error("cannot devide by 0")
         
        }
        return num1/num2;
    }catch(err){
        console.log('error',err.message);
        return null
    }
}

async function mainFunction(){
    console.log( await division(10,2));
    console.log( await division(10,0));
}
mainFunction()