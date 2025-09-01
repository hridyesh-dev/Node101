import { add, sub, divide } from "./firstModule";
console.log(add(10,20));
console.log(sub(10,20));
console.log(divide(10,5));


try {
    console.log("Trying to divide by 0");
   let res=divide(0,10);
   console.log(res);
} catch (error) {
    console.log("the error is :",error.message);
}
