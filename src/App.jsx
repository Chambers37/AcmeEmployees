import { useEffect } from "react";
import { useState } from "react"

const App =() => {

const [employees, setEmployees] = useState([]);

useEffect(() => {

  const getEmployees = async() => {

    const response = await fetch('/api/v1/employees');
    const returnedEmployees = await response.json();
    setEmployees(returnedEmployees)
    console.log(returnedEmployees)
  }

  getEmployees();

}, [])

  return (
    <>
      <h1>Current Employees</h1>
      <ol>

        {
          employees.map(employee => {
            return (
            <li key={employee.id}>{employee.name}{employee.is_admin ? ' - Admin' : null}</li>
          )
          })
        }
      </ol>
    </>
  )
}

export default App
