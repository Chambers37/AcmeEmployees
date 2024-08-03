/* eslint-disable no-undef */
const express = require('express');
const { getAllEmployees } = require('./db/employees.cjs')
const client = require('./db/client.cjs')

const app = express();
const PORT = process.env.PORT || 3000;

client.connect();

app.use(express.static('dist'));

app.get('/api/v1/employees', async(req, res, next) => {
  try {
    const allEmplyees = await getAllEmployees();
    res.send(allEmplyees)
  } catch (error) {
    console.log('Error fetching users in server.cjs file', error);
    throw error;
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
