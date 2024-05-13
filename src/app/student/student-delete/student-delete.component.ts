import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../_Services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-delete',
  standalone: true,
  imports: [],
  templateUrl: './student-delete.component.html',
  styleUrl: './student-delete.component.css'
})
export class StudentDeleteComponent implements OnInit , OnDestroy {
  std: any;
  sub:Subscription | null =null;
  constructor(public studentService:StudentService,public router:Router,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = +params['id']; // Get the department id from route params
      // Call service to fetch department data
      this.sub = this.studentService.getById(id).subscribe(
        student => {
          this.std = student;
          // Once you have the department data, perform delete operation
          this.deleteStudent(id);
        },
        error => {
          console.error('Error fetching department:', error);
        }
      );
    });
  }
    deleteStudent(id: number) {
  this.studentService.delete(id).subscribe(() => {
    console.log(`Student with id ${id} deleted successfully.`);
    this.router.navigateByUrl("/students");

    // Optionally, update your local data if needed
  }, error => {
    console.error('Error deleting student:', error);
  });
}
ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.sub?.unsubscribe();
  }

}
