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

  // drop table
  await dropTables();  

  // create table
  await createTable();  

  // create emyployees
  await createEmployee('Bob Martin', false);
  
  await createEmployee('Mary Smith', true);
  
  await createEmployee('Amy Lynn', false);
  
  await createEmployee('Joe Shmoe', false);
  
  await createEmployee('Jessy James', true);
  

  // disconnect
  client.end();
  
}

syncAndSeed();