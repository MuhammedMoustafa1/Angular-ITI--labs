import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../_Services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../_Models/department';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-department',
  standalone: true,
  imports: [],
  templateUrl: './delete-department.component.html',
  styleUrl: './delete-department.component.css'
})
export class DeleteDepartmentComponent implements OnInit,OnDestroy {
  dept: any;
  sub:Subscription | null =null;
  constructor(public departmentService:DepartmentService,public router:Router,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id']; // Get the department id from route params
      // Call service to fetch department data
      this.sub = this.departmentService.getById(id).subscribe(
        department => {
          this.dept = department;
          // Once you have the department data, perform delete operation
          this.deleteDepartment(id);
        },
        error => {
          console.error('Error fetching department:', error);
        }
      );
    });
  }
    deleteDepartment(id: number) {
  this.departmentService.delete(id).subscribe(() => {
    console.log(`Department with id ${id} deleted successfully.`);
    this.router.navigateByUrl("/departments");

    // Optionally, update your local data if needed
  }, error => {
    console.error('Error deleting department:', error);
  });
}
ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.sub?.unsubscribe();
  }

}
