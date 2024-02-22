const Joi = require('joi');

const concessionaireSchema = Joi.object({
    Nombre: Joi.string().min(3).max(100).required(),
    Direccion: Joi.string().min(5).max(255).required(),
    Ciudad: Joi.string().min(2).max(100).required()
});

module.exports = { concessionaireSchema };
