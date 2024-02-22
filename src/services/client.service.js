const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { pool } = require('../libs/postgres');

class ClientService {

    constructor() {
        this.clients = [];
        this.pool = pool;
        this.pool.on('error', (err) => { boom.badImplementation(err) })
    }

    async generate() {
        const limit = 10;
        for (let i = 0; i < limit; i++) {
            const name = faker.name.fullName();
            const email = faker.internet.email();
            const telephone = faker.phone.number();

            const query = 'INSERT INTO Clientes (Nombre, Email, Telefono) VALUES ($1, $2, $3)';
            const values = [name, email, telephone];

            try {
                await pool.query(query, values);
            } catch (err) {
                boom.badImplementation(err);
            }
        }
    }

    async create(data) {
        const { name, email, telephone } = data;
        const query = 'INSERT INTO Clientes (Nombre, Email, Telefono) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, telephone];

        try {
            const res = await pool.query(query, values);
            return res.rows[0];
        } catch (err) {
            boom.badData(err);
            throw err;
        }
    }

    async find() {
        const query = 'SELECT * FROM clientes';
        const result = await this.pool.query(query)
        return result.rows;
    }

    async findOne(id) {
        const query = 'SELECT * FROM Clientes WHERE ClienteID = $1';
        const values = [id];

        try {
            const res = await pool.query(query, values);
            if (res.rows.length === 0) {
                throw boom.notFound('Client not found');
            }
            return res.rows[0];
        } catch (err) {
            boom.badImplementation(err);
            throw err;
        }
    }

    async update(id, changes) {
        const setString = Object.keys(changes).map((key, index) => `${key} = $${index + 2}`).join(', ');
        const query = `UPDATE Clientes SET ${setString} WHERE ClienteID = $1 RETURNING *`;
        const values = [id, ...Object.values(changes)];

        try {
            const res = await pool.query(query, values);
            if (res.rows.length === 0) {
                throw boom.notFound('Client not found');
            }
            return res.rows[0];
        } catch (err) {
            boom.badImplementation(err);
            throw err;
        }
    }

    async deleteClient(id) {
        const query = 'DELETE FROM Clientes WHERE ClienteID = $1 RETURNING *';
        const values = [id];

        try {
            const res = await pool.query(query, values);
            if (res.rowCount === 0) {
                throw boom.notFound('Client not found');
            }
            return res.rows[0];
        } catch (err) {
            boom.badImplementation(err);
            throw err;
        }
    }

}

module.exports = ClientService;