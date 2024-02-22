const express = require('express');
const { ConcessionairesService } = require('../services/concessionaires.service'); // Ajusta la ruta según tu estructura de proyecto
const boom = require('@hapi/boom');
const router = express.Router();

const concessionairesService = new ConcessionairesService();

router.post('/', async (req, res, next) => {
    try {
        const concessionaires = await concessionairesService.create(req.body);
        res.status(201).json(concessionaires);
    } catch (error) {
        next(boom.badImplementation(error.message));
    }
});

router.get('/', async (req, res, next) => {
    try {
        const concessionaires = await concessionairesService.find();
        res.json(concessionaires);
    } catch (error) {
        next(boom.badImplementation(error.message));
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const concessionaires = await concessionairesService.findOne(req.params.id);
        if (!concessionaires) {
            throw boom.notFound('Dealership not found');
        }
        res.json(concessionaires);
    } catch (error) {
        next(error.isBoom ? error : boom.badImplementation(error.message));
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const updatedConcessionaires = await concessionairesService.update(req.params.id, req.body);
        if (!updatedConcessionaires) {
            throw boom.notFound('Concessionaire not found');
        }
        res.json(updatedConcessionaires);
    } catch (error) {
        next(error.isBoom ? error : boom.badImplementation(error.message));
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const result = await concessionairesService.deleteConcessionaire(req.params.id);
        if (!result) {
            throw boom.notFound('Concessionaire not found');
        }
        res.status(204).send();
    } catch (error) {
        next(error.isBoom ? error : boom.badImplementation(error.message));
    }
});

module.exports = router;
