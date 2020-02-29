module.exports = (app) => {
    const login = require('../controller/login.controller');

    app.post('/login', login.create);

    app.get('/login', login.findAll);

    app.get('/find', login.findOne);

    app.post('/login/token',login.findToken);
}