import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent {

  constructor(private activeRouter: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router) { }

  id!: number;
  employee: Employee = new Employee();

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })
  }

  updateEmployeeData() {
    this.employeeService.updateEmployeeData(this.employee).subscribe(data => {
      alert("Update Employee Successfully");
      this.router.navigate(['/Employee']);
    })
  }

}
