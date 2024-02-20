const express = require('express');
const { faker } = require('@faker-js/faker');
// const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;



app.get('/clients', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Cliente', lastname: 'Apellido', age: 25, email: "" });
});

app.get('/vehicles', (req, res) => {
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

app.get('/concessionaire', (req, res) => {
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
  res.json({ concessionaire: 'Concesionario' });
});

app.get('/concessionaire/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
})

app.get("vehicles/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
})

app.get("clients/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

// routerApi(app);

app.listen(port, () => {
  console.log('Mi port' + port);
});
