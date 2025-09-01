console.log("HELLO NODE JS ")

const arr=[1,2,3,4,5,6,7,8,9,10]
console.log("array: ",arr);

setTimeout(()=>{
    console.log("THIS MESSAGE IS DELAYED BY 2 SECONDS ");
},2000)

console.log("THIS IS LAST LINE OF SYNC CODE ");

/*
Output : 

HELLO NODE JS

array:  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]

THIS IS LAST LINE OF SYNC CODE

THIS MESSAGE IS DELAYED BY 2 SECONDS



*/