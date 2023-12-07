const jwtToken = (user,statusCode,res) =>{

    const token = user.getJwtToken();

   const cookies = {
       expires: new Date(
           Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
       ),
       httpOnly: true
   };

   res.status(statusCode).cookie("token",token,cookies).json({success: true, user,token });
}

module.exports = jwtToken;
