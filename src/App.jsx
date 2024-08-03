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
      <h1>Hello Employees</h1>
      {
        employees.map(employee => {
          return <li key={employee.id}>{employee.name}</li>
        })
      }
    </>
  )
}

export default App
