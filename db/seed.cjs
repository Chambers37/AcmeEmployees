/* eslint-disable no-undef */
const client = require('./client.cjs');
const { createEmployee } = require('./employees.cjs')

const dropTables = async() => {
  try {
    await client.query(`
      DROP TABLE IF EXISTS employees; 
    `)
  } catch (error) {
    console.log(error)
  }
};

const createTable = async() => {
  try {
    await client.query(`
      CREATE TABLE employees (
      id SERIAL PRIMARY KEY,
      name VARCHAR(49) NOT NULL,
      is_admin BOOLEAN NOT NULL
      );
    `)
  } catch (error) {
    console.log('Error making table', error)
    throw error;
  }
};


const syncAndSeed = async() => {
  // connect
  client.connect();
  console.log('Connected');


  // drop table
  await dropTables();
  console.log('Tables Dropped');

  // create table
  await createTable();
  console.log('Table Created');

  // create emyployees
  await createEmployee('Bob1', false);
  console.log('Employee 1 created')
  await createEmployee('Bob2', true);
  console.log('Employee 2 created')
  await createEmployee('Bob3', false);
  console.log('Employee 3 created')
  await createEmployee('Bob4', false);
  console.log('Employee 4 created')
  await createEmployee('Bob5', true);
  console.log('Employee 5 created')

  // disconnect
  client.end();
  console.log('Disconnected')
}

syncAndSeed();