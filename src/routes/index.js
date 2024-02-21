const express = require('express');

const vehiclesRouter = require('./vehicles.router');
const concessionairesRouter = require('./concessionaires.router');
const clientsRouter = require('./clients.router');


function routerApi(app) {

    const router = express.Router();
    app.use('/api/v2/', router);

    router.use('/vehicles', vehiclesRouter);
    router.use('/concessionaires', concessionairesRouter);
    router.use('/clients', clientsRouter);
}

module.exports = routerApi;