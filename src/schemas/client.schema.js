const Joi = require('joi');

const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const telephone = Joi.number()
const id = Joi.string().alphanum().min(1).max(30);


const createClientSchema = Joi.object({
    name: name.required(),
    email: email.required(),
    telephone: telephone.required()
});

const getClientSchema = Joi.object({
    id: id.required()
});



module.exports = { createClientSchema, getClientSchema}

