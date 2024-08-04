/* eslint-disable no-undef */
const { Client } = require('pg');

// I get a 'password must be a string' error if i dont include the name/password to get into databse
const client = new Client(process.env.DATABASE_URL || 'postgress://Chamb:fullstack@localhost:5432/acme_employees');

module.exports = client;