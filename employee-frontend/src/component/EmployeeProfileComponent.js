// EmployeeProfileComponent.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import EmployeeService from '../service/EmployeeService';

const EmployeeProfileComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const [employeePhoto, setEmployeePhoto] = useState(null);

  useEffect(() => {
    console.log('EmployeeProfileComponent mounted with ID:', id);
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        console.log('Employee data:', res.data);
        setEmployee(res.data);
        setEmployeePhoto(res.data.photo || null);
      })
      .catch((e) => console.log(e));
  }, [id]);
  
  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Profile</h2>
      <div className="card col-md-6 offset-md-3">
        <div className="card-body d-flex align-items-center">
          <div className="mr-4">
            {employeePhoto ? (
              <img
                src={employeePhoto}
                alt="Employee Photo"
                className="rounded-circle"
                style={{ width: '100px', height: '100px' }}
              />
            ) : (
              <FontAwesomeIcon icon={faUser} size="7x" className="mr-2" />
            )}
          </div>
          <div style={{ marginLeft: '20px' }}>
           
            <h5>Employee ID: {employee.id}</h5>
            <h5>First Name: {employee.firstName}</h5>
            <h5>Last Name: {employee.lastName}</h5>
            <h5>Email: {employee.email}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileComponent;
