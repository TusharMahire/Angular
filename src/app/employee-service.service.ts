import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseURL = "http://localhost:8080/api/employee";

  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee) {
    console.log(employee);
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployeeData(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}`, employee);
  }
}
