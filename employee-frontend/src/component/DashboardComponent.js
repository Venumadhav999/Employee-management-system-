import React, { useEffect, useState } from 'react';
import EmployeeService from '../service/EmployeeService';

const DashboardComponent = () => {
  const [employeeCount, setEmployeeCount] = useState(0);

  useEffect(() => {
    // Fetch the total number of employees from the server
    EmployeeService.getAllEmployee()
      .then((res) => {
        setEmployeeCount(res.data.length);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>
      <div className="text-center">
        <p>Total Employees: {employeeCount}</p>
      </div>
    </div>
    
  );
};

export default DashboardComponent;
