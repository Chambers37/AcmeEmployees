/* eslint-disable no-undef */
const client = require('./client.cjs')

const createEmployee = async(name, is_admin) => {
  try {
    await client.query(`
      INSERT INTO employees (name, is_admin)
      VALUES ('${name}', '${is_admin}'); 
    `)
  } catch (error) {
    console.log(`Error creating employee ${name}`, error);
    throw error;
  }
}

const getAllEmployees = async() => {
  try {
    const { rows }  = await client.query(`
      SELECT * FROM employees;
    `)
    return rows;
  } catch (error) {
    console.log('Error getting all employees', error);
    throw error;
  }
}

module.exports = {
  createEmployee,
  getAllEmployees
}