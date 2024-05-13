import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../_Services/student.service';
import { Student } from '../../_Models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
    nstd : Student = new Student(0,"",1,0);
  constructor(public studentService:StudentService , public router:Router){

  }
    showAddForm: boolean = false;

    save(){
    this.studentService.add(this.nstd).subscribe(a=>{
      console.log(a);

      this.router.navigateByUrl("/students");
    });

    }

    // save(){
    //   this.studentService.addStudent(new Student(this.nstd._id,this.nstd.name,this.nstd.age));
    //   this.router.navigateByUrl("/students");
    // }


}
