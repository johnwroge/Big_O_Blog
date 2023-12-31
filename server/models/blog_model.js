const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = process.env.PG_URL;

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text, params, callback) => {
        console.log(`***** Executed Query *******`);
        return pool.query(text, params, callback);
    }
};
