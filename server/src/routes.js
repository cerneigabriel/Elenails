const AutheticationController = require('./controllers/AuthenticationController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = app => {
    app.post(
        '/register',
        AuthenticationControllerPolicy.register,
        AutheticationController.register
    );
};