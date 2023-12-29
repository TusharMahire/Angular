import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void { }

  addEmployeeData() {
    this.employeeService.addEmployee(this.employee).subscribe(data => {
      alert("Employee Data Instered Susscssfully");
      this.goToEmployeeListPage();
    }, error => alert("Sorry Unable to Add Employee Data"));
  }

  goToEmployeeListPage() {
    this.router.navigate(['/Employee']);
  }

}
