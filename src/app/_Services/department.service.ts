import { Injectable } from '@angular/core';
import { Department } from '../_Models/department';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = "http://localhost:8080/departments/"

  constructor(private http:HttpClient) { }

  departments: Department[] = [
    new Department(1, "IT"),
    new Department(2, "HR"),
    new Department(3, "Finance"),
    new Department(4, "Marketing"),
    new Department(5, "Operations"),
  ];

  getAll() {
    // return this.departments;
    return this.http.get<Department[]>(this.baseUrl);
  }
  getById(id:number){
    // call backend
    return this.http.get<Department>(this.baseUrl+id);
  }
  add(dept:Department){
    return this.http.post<Department>(this.baseUrl,dept);

  }
  update(dept:Department){
    return this.http.put<Department>(this.baseUrl+dept._id,dept)
  }
  delete(id: number) {
  return this.http.delete<void>(this.baseUrl + id);
}

  getDepartment(d: Department) {
    return d;
  }

  addDepartment(ndep: Department) {
    this.departments.push(new Department(ndep._id, ndep.name));
  }

  deleteDepartment(id: number) {
    const confirmDelete = confirm("Are you sure you want to delete this department?");
    if (confirmDelete) {
      this.departments = this.departments.filter(item => item._id !== id);
      // Optionally, you can also perform any other actions related to deletion here
    }
  }

  updateDepartment(d: Department, udep: Department) {
    const index = this.departments.findIndex(item => item._id === d._id);
    if (index !== -1) {
      this.departments[index].name = udep.name;
    }
  }
}
