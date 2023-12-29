import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import './ListEmployeeComponent.css';

const ListEmployeeComponent = () => {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    EmployeeService.getAllEmployee()
      .then((res) => {
        setEmployeeArray(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }

  function deleteEmployee(e, id) {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then(getAllEmployee())
      .catch((e) => console.log(e));
  }

  const filteredEmployees = employeeArray.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCancelSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">List Employee</h2>
      <div className="search-bar-container">
        <h5><label htmlFor="searchInput">Name:</label></h5>
        <div className="search-bar">
          <input
            type="text"
            id="searchInput"
            placeholder="Search by employee name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="cancel-button" onClick={handleCancelSearch}>
              &#x2715;
            </button>
          )}
         
        </div>
      </div>

      <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <Link
                  to={`/add-employee/${employee.id}`}
                  className="btn btn-info"
                  href=""
                >
                  Update
                </Link>{' '}
                <button
                  onClick={(e) => deleteEmployee(e, employee.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
