
//HOW TO USE PROMISES
//RESOLVE EXAMPLE
// to create a new promise we can use Promise interface
const delayFn=(time)=>{
    return new Promise((res,rej)=>{
        //this will resolve promise after time
        setTimeout(res,time)
    })
}

console.log('Promise lecture starts');

delayFn(2000).then(()=>{
    console.log("Promise resolved after 2 seconds");
}).catch((err)=>{
    console.log("promise rejected after 2 seconds");
})
console.log("end");

//REJECT EXAMPLE
const divideFn=(num1,num2)=>{
    return new Promise((res,rej)=>{
        if(num2==0){
            rej("Can not divide by 0")
        }else{
            res(num1/num2)
        }
    })
}

divideFn(10,0).then((data)=>{
    console.log("the answer is,",data);
}).catch((err)=>{
    console.log(err);
})