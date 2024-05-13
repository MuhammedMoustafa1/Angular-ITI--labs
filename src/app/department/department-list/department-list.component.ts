import { Component, OnDestroy, OnInit } from '@angular/core';
import { DepartmentService } from '../../_Services/department.service';
import { Department } from '../../_Models/department';
import { Subscription } from 'rxjs';
import { Router, RouterLink ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit , OnDestroy{
  depts:Department[]=[];
  sub:Subscription | null =null;
  constructor(public departmentService:DepartmentService,public router:Router){}
  ngOnInit(): void {
    this.sub= this.departmentService.getAll().subscribe(data=>this.depts=data);
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
//   deleteDepartment(id: number) {
//   this.departmentService.delete(id).subscribe(() => {
//     console.log(`Department with id ${id} deleted successfully.`);
//     window.location.reload();

//     // Optionally, update your local data if needed
//   }, error => {
//     console.error('Error deleting department:', error);
//   });
// }

}
