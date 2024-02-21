const express = require('express');
const { faker } = require('@faker-js/faker');
const router = express.Router();

router.get('/', (req, res) => {
    const concessionaire = [];
    const namesConcessionaire = ['Concesionario Las Aguas', 'Concesionario Villalba', 'Concesionario Interior', 'Concesionario Exterior'];
    const cities = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];
    for (let i = 0; i < 4; i++) {
        concessionaire.push({
            id: faker.datatype.uuid(),
            name: namesConcessionaire[i],
            address: `Calle 123 # 45 - ${i}`,
            city: cities[i],
        });
    }
    res.json(concessionaire);
});

router.get('/concessionaire/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
})

module.exports = router;
