

console.log("NODE MODULE WRAPPER Explorer ");

console.log("File Name in wrapper explorer: ",__filename);
console.log("Directory Name in wrapper explorer: ",__dirname);
console.log("=====================================================================================");
module.exports.greet=function(name){
    console.log(`Hello ${name}`);
}