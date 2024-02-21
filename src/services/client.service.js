const express = require('express');
const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ClientService {

    constructor() {
        this.clients = [];
        this.generate();
    }

    async generate() {
        const limit = 10;
        for (let i = 0; i < limit; i++) {
            this.clients.push({
                id: faker.datatype.uuid(),
                name: faker.name.fullName(),
                gender: faker.name.gender(),
                jobArea: faker.name.jobArea(),
                jobTitle: faker.name.jobTitle(),
                isBlocked: faker.datatype.boolean()
            })
        }
    }

    async create(data) {
        const newClient = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.clients.push(newClient);
        return newClient;
    }

    async find() {
        return this.clients;
    }

    async findOne(id) {
        const client = this.clients.find(client => client.id === id);
        if (!client) {
            throw boom.notFound('Client not found');
        }
        if (client.isBlocked) {
            throw boom.conflict('Client is blocked');
        }
        return client;
    }

    async update(id, changes) {
        const index = this.clients.findIndex(client => client.id === id);
        if (index === -1) {
            throw boom.notFound('Client not found');
        }
        const client = this.clients[index];
        this.clients[index] = {
            ...changes,
            ...client
        }
    }

    async delete(id) {
        const index = this.clients.findIndex(client => client.id === id);
        if (index === -1) {
            throw boom.notFound('Client not found');
        }
        this.clients.splice(index, 1);
    }
}

module.exports = ClientService;