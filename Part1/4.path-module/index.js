
const path=require('path')

//this will return the absolute path of the directory
console.log("directory name :",path.dirname(__filename));

//will return the name of the file 
console.log("filename name :",path.basename(__filename));

//will return path extension
console.log("file extension :",path.extname(__filename));

// we can combine multiple path segments to make absolute path or relative paths
const joinPath=path.join("/users","/docs","work","imp")
console.log("Joined path is :",joinPath);

const resolvePath=path.resolve("users","docs","work","imp")
console.log("Resolve path",resolvePath);

const normalisePath=path.normalize("/users/.docs/../work/imp")
console.log("Normalize path",normalisePath);




