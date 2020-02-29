const Login = require('../model/login.model')

module.exports = {

    create(login, callback) {
        const user = new Login()
        user.name = login.name;
        user.email = login.email;
        user.password = login.password
        user.present = login.present

        user.save().then(data => {
            return callback(null, data);
        }).catch(err => {
            return callback({
                message: "something went wrong"
            })
        })
    },

    findAll(data, callback) {
        Login.find().then(data => {
            return callback(null, data)
        }).catch(err => {
            return callback({
                message: "Error while retrieving data"
            })
        })
    },

    findOne(data, callback) {
        console.log(data);

        Login.findOne(data)
            .then(data => {return callback(null, data)}).catch(err => {
                return callback({
                    message: "Error while retrieving data"
                })
            })
    },
    findToken(data, callback){
        Login.find(data)
        .then(data => {return callback(null,data)}).catch(err =>{
            return callback({
                message:"Error occured while retrieving data"
            })
        })
    }
}

