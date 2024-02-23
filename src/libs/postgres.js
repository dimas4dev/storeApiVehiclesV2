const { Pool } = require('pg');

const pool = new Pool({
    host: 'dpg-cnbtps779t8c73ep08j0-a',
    port: 5432,
    user: 'storagevehicle',
    password: 'Ue7yPGZjpDr5d6oYtlY4rRH239OscEPR',
    database: 'storeapivehiclesv2'
})

module.exports = { pool }

