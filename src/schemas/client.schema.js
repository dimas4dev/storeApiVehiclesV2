const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(30);
const document = Joi.string().alphanum().min(3).max(30);


const createClientSchema = Joi.object({
    name: name.required(),
    document: document.required(),
});



module.exports = { createClientSchema}