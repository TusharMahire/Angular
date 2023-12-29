import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id:number){
    console.log(id);
    this.router.navigate(["update-employee", id]);
  }

}