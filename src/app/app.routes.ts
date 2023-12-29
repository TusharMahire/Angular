import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

export const routes: Routes = [
    { path: 'Employee', component: EmployeeListComponent },
    { path: 'addEmployee', component: CreateEmployeeComponent },
    { path: 'update-employee/:id', component: UpdateEmployeeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
    exports: [RouterModule],
    providers: [HttpClient]
})
export class AppRoutes { }