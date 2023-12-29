import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Add Employee Button */}
      <center>
        <Link to="/add-employee" className="btn btn-primary btn-lg m-2">
          Add Employee
        </Link>
      </center>

      {/* List Employees Button */}
      <center>
        <Link to="/list-employees" className="btn btn-success btn-lg m-2">
          List Employees
        </Link>
      </center>

      {/* Profile Button */}
      <center>
        <Link to="/profile" className="btn btn-info btn-lg m-2">
          Profile
        </Link>
      </center>

      {/* Dashboard Button */}
      <center>
        <Link to="/dashboard" className="btn btn-warning btn-lg m-2">
          Dashboard
        </Link>
      </center>
    </div>
  );
};

export default Home;
