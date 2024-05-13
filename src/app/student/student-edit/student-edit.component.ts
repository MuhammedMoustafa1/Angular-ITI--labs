import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../_Services/student.service';
import { Student } from '../../_Models/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'],

})
export class StudentEditComponent implements OnInit {
  student: Student = new Student(0,"",1,0);
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(d=>{
      this.studentService.getById(d['id']).subscribe(s=>{
        this.student = s
      })
    })
  }
  save(){

    this.studentService.update(this.student).subscribe(d=>{
      console.log(d)
      this.router.navigateByUrl("/students");
    })
  }

//   ngOnInit(): void {
//   this.route.params.subscribe(params => {
//     const id = +params['id']; // (+) converts string 'id' to a number
//     const foundStudent = this.studentService.getById(id);
//     if (foundStudent !== null) {
//      // this.student = foundStudent;
//     } else {
//       // Handle the case when the student with the given ID is not found
//       console.error(`Student with ID ${id} not found.`);
//     }
//   });
// }


//   updateStudent() {
//     // Call the updateStudent method of the student service
//     this.studentService.updateStudent(this.student);
//     // Redirect back to student details page after update
//     this.router.navigate(['/students']);
//   }
}
