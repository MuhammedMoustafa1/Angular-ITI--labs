import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../_Services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../_Models/department';

@Component({
  selector: 'app-department-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-edit.component.html',
  styleUrl: './department-edit.component.css'
})
export class DepartmentEditComponent implements OnInit {
  dept:Department = new Department(0,"","Tanta");

  constructor(public departmentService:DepartmentService, public activatedRoute:ActivatedRoute,private router:Router ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(d=>{
      this.departmentService.getById(d['id']).subscribe(s=>{
        this.dept = s
      })
    })
  }
  save(){

    this.departmentService.update(this.dept).subscribe(d=>{
      console.log(d)
      this.router.navigateByUrl("/departments");
    })
  }
}
