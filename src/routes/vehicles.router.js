const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
    const vehicles = [];
    for (let i = 0; i < 10; i++) {
        vehicles.push({
            id: faker.datatype.uuid(),
            brand: faker.vehicle.manufacturer(),
            color: faker.vehicle.color(),
            model: faker.vehicle.model(),
            type: faker.vehicle.type(),
        });
    }
    res.json(vehicles);
});

router.get("vehicles/:id", (req, res) => {
    const { id } = req.params;
    res.json({ id });
})

module.exports = router;