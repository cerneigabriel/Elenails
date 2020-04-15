const Joi = require('joi');

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(32).required(),
        }

        const {error} = Joi.validate(req.body, schema);

        if (error) res.status(400).send({
            error: error
        });
        else next();
    }
}