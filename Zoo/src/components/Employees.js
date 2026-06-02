import React from 'react';

function Employees() {
  const employees = [
    { name: 'Ali', email: 'ali@gmail.com', phone: '123456', position: 'Keeper' },
    { name: 'Sara', email: 'sara@gmail.com', phone: '654321', position: 'Guide' },
    { name: 'John', email: 'john@gmail.com', phone: '111222', position: 'Veterinarian' }
  ];

  return (
    <div>
      <h1>Employees 🧑‍💼</h1>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;
