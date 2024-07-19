const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token || 
      req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      return res.satus(400).json({
        success: true,  
        message: "Token not found",
      });
    }
    try {
      const decode = await  jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    next()
    } catch (error) {
      console.log(error);
      return res.status(401).json({
        success: false, 
        message: "token is invalid", 
      }); 
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:'Something went wrong while validating the token',
    });
  }
};

exports.isAdmin = async(req, res, next)=>{
    try {
        if(req.user.accountType !== "Admin"){
            return res.status(400).json({
                success:false,
                message:"This route is protected and only admin can access this route"
            })
        }
        next()
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
          });
    
    }
}

exports.isUser = async(req, res, next)=>{
    try {
        if(req.user.accountType !== "User"){
            return res.status(400).json({
                success:false,
                message:"This route is protected and only user can access this route"
            })
        }
        next()
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again",
          });
    
    }
}
