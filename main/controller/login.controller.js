const service = require('../services/login.services');
const verifyToken = require('../../verify.Token');
const jwt = require('jsonwebtoken');
const secretKey = "secretKey";
const bcrypt = require('bcrypt');

module.exports = {
create(req, res){

    if (!req.body.email) {
        return res.status(500).send({
            message: "login cannot be empty"
        });
    }

    const login = {
        name: req.body.name,
        email: req.body.email,
        password:bcrypt.hashSync(req.body.password,8),
        present:req.body.present
    };

    service.create(login, ((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error has been occurred"

            })
        }

        res.json(data);
    }))
},

findAll(req, res){
    service.findAll(req, ((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error has been occurred"
            })
        }
        res.send(data);
        if(data){
            this.findToken(data, callback);
        }
    }))

},

    findOne(req, res){
    console.log();
    
    service.findOne({email : req.body.email, password: req.body.password}, ((err, data) => {
        if (err) {
            message: err.message || "some error has been occurred"
            res.send("Please Enter Correct credentials!!!")
        }
        verifyToken.tokenFun(data, (err, data) =>{
            if(err){
                message:"Error occured" 
            }
        })
        res.send("Login Successfully Done!!!")
        res.send(data);
    }))
},

findToken(req , res){
    jwt.verify(req.headers.token, secretKey, (err,data) => {
        if(err){
            console.log("Error has occured");
            
        }else{
            var tokenVal = req.headers.token;
            var header = jwt.decode(tokenVal);
            console.log("header--------------->",header);
            res.send(header);

        }
    })
}
}
