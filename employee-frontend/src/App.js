import './App.css';
import AddEmployeeComponent from "./component/AddEmployeeComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import HomeComponent from"./component/HomeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardComponent from './component/DashboardComponent';
import ProfileListEmployeeComponent from './component/ProfileListEmployeeComponent';
import EmployeeProfileComponent from './component/EmployeeProfileComponent'; 
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
          <Route path="/employee" element={<ListEmployeeComponent />} />
          <Route path="/add-employee" element={<AddEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<AddEmployeeComponent />} />
          <Route path="/list-employees" element={<ListEmployeeComponent />} />
          <Route path="/profile" element={<ProfileListEmployeeComponent />} />
          <Route path="/employee/profile/:id" element={<EmployeeProfileComponent />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
