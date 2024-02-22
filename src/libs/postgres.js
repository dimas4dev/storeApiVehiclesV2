const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'mybro',
    password: 'mybro',
    database: 'mydb'
})

module.exports = { pool }

