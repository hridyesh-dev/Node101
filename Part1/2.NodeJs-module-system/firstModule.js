function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b;
}

function divide(a,b){
    if(b==0){
        throw new Error("cant divide by 0")
    }
    return a/b;
}

export default{ add , sub , divide }

/*
    every module is wrapped in the module wrapper before it is executed 
    this function have some parameter as require, exports ,module , filename and directory name

    (
        function(exports,require,module,_filename,_dirname){
            //our module code goes here 
        }
    )

*/
