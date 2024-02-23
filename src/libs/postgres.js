const { Pool } = require('pg');

const pool = new Pool({
    host: 'Ue7yPGZjpDr5d6oYtlY4rRH239OscEPR@dpg-cnbtps779t8c73ep08j0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'storagevehicle',
    password: 'Ue7yPGZjpDr5d6oYtlY4rRH239OscEPR',
    database: 'storeapivehiclesv2'
})

module.exports = { pool }

