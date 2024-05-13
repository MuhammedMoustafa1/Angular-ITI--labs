import { Component } from '@angular/core';
import { Department } from '../../_Models/department';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../_Services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css'
})
export class DepartmentAddComponent {
  dept:Department = new Department(0,"","Mansoura");

  constructor(public deptartmentService:DepartmentService, private router:Router) {

  }
  save(){
    this.deptartmentService.add(this.dept).subscribe(a=>{
      console.log(a);

      this.router.navigateByUrl("/departments");
    });

    }

}
