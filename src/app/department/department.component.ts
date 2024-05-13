import { Component } from '@angular/core';
import { Department } from '../_Models/department';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../_Services/department.service';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  showAddForm: boolean = false;
  showEditForm: boolean = false;
  showDetCard: boolean = false;
  ndept: Department = new Department(0, ""); // Assuming Department has id and name properties
  udept: Department = new Department(0, "");
  hdept: Department = new Department(0, "");
  constructor(public departmentService:DepartmentService) {

  }

  departments:Department[] =[];
  allDepartments(){
    // this.departments=this.departmentService.getAll();
  }

  addDepartment() {
    this.departmentService.addDepartment(new Department(this.ndept._id, this.ndept.name))
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id);
  }

  editDepartment(d: Department) {
    this.udept = { ...d };
  }

  submitEdit(d: Department) {
    this.departmentService.updateDepartment(this.udept,d);
  }

  showDepartmentDetails(d: Department) {
    // this.hdept = { ...d };
    this.hdept = this.departmentService.getDepartment(d);
  }

}
