import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
import './ListEmployeeComponent.css';

const ProfileListEmployeeComponent = () => {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.log('ProfileListEmployeeComponent mounted');
    getAllEmployee();
  }, []);

  function getAllEmployee() {
    EmployeeService.getAllEmployee()
      .then((res) => {
        console.log('Employee data:', res.data);
        setEmployeeArray(res.data);
      })
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
      <h2 className="text-center mb-4">Profile List Employee</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Profile</th>
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
                  to={`/employee/profile/${employee.id}`}
                  className="btn btn-info"
                >
                  Profile
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileListEmployeeComponent;
