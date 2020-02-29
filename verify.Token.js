const jwt = require('jsonwebtoken');

exports.tokenFun = (loginData,callback) => {
    const secretKey = "secretKey";
    login = {
        id:loginData._id
    }
    console.log('loginData----->',login);
    

    jwt.sign(login , secretKey, (err,token) => {

        if(err){
            console.log("error has occured", err);
        }
        else{
            console.log(token);
            return callback(null, token)
            
        }
    });
}