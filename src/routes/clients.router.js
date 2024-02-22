const express = require('express');
const router = express.Router();

const ClientService = require('../services/client.service');
const clientService = new ClientService();

const { validatorHandler } = require('../middlewares/validator.handler');
const { createClientSchema, getClientSchema } = require('../schemas/client.schema');


router.get('/', async (req, res) => {
    const clients = await clientService.find();
    res.json(clients);
});


router.get("/:id", validatorHandler(getClientSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const client = await clientService.findOne(id);
            res.status(200).json(client);
        } catch (error) {
            next(error);
        }
    });

router.post('/', validatorHandler(createClientSchema, 'body'),
    async (req, res, next) => {
        try {
            const { body } = req;
            await clientService.create(body);
            res.status(201).json({
                message: 'created',
            });
        }
        catch (error) {
            next(error);
        }
    });

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const changes = body;
    await clientService.update(id, changes);
    res.status(206).json({
        message: 'updated',
        id,
    });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await clientService.deleteClient(id);
    res.status(200).json({
        message: 'deleted',
        id,
    });
});

module.exports = router;