const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const { pool } = require('../libs/postgres');

class ConcessionairesService {

    constructor() {
        this.pool = pool;
        this.pool.on('error', (err) => { boom.badImplementation(err) });
    }

    async create(data) {
        const { name, address, city } = data;
        const query = 'INSERT INTO Concesionarios (Nombre, Direccion, Ciudad) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, address, city];

        try {
            const res = await this.pool.query(query, values);
            return res.rows[0];
        } catch (err) {
            boom.badData(err);
            throw err;
        }
    }

    async find() {
        const query = 'SELECT * FROM Concesionarios';
        const result = await this.pool.query(query);
        return result.rows;
    }

    async findOne(id) {
        const query = 'SELECT * FROM Concesionarios WHERE ConcesionarioID = $1';
        const values = [id];

        try {
            const res = await this.pool.query(query, values);
            if (res.rows.length === 0) {
                throw boom.notFound('Dealership not found');
            }
            return res.rows[0];
        } catch (err) {
            boom.badImplementation(err);
            throw err;
        }
    }

    async update(id, changes) {
        const setString = Object.keys(changes).map((key, index) => `${key} = $${index + 2}`).join(', ');
        const query = `UPDATE Concesionarios SET ${setString} WHERE ConcesionarioID = $1 RETURNING *`;
        const values = [id, ...Object.values(changes)];

        try {
            const res = await this.pool.query(query, values);
            if (res.rows.length === 0) {
                throw boom.notFound('Dealership not found');
            }
            return res.rows[0];
        } catch (err) {
            boom.badImplementation(err);
            throw err;
        }
    }

    async deleteConcessionaire(id) {
        const query = 'DELETE FROM Concesionarios WHERE ConcesionarioID = $1 RETURNING *';
        const values = [id];

        try {
            const res = await this.pool.query(query, values);
            if (res.rowCount === 0) {
                throw boom.notFound('Dealership not found');
            }
            return res.rows[0]; // Retorna el concesionario eliminado
        } catch (err) {
            boom.badImplementation(err);
            throw err;
        }
    }

}

module.exports = { ConcessionairesService };
