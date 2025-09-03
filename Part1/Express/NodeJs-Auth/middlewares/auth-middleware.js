const authMiddleware=(req,res,next)=>{
    console.log("Auth middleware is logged");

    const authHeader=req.headers['authorization']
    console.log(authHeader);
    const token=authHeader && authHeader.split(" ")[1];
    if(!token){
        res.status(401).json({
            sucess:false,
            message:"Access denied send valid token"
        })
    }
    next();
}
module.exports=authMiddleware
//5:46:30