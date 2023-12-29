package com.example.employee.managment.service;
import java.util.List;
import java.util.Optional;
import com.example.employee.managment.model.Employee;

public interface EmployeeServiceInterface {
    public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeeById(int id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(int id, Employee employee);
    void deleteEmployee(int id);
}
