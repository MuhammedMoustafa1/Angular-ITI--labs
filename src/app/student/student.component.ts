import { Component } from '@angular/core';
import { Student } from '../_Models/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../_Services/student.service';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  constructor(public studentService:StudentService){

  }
  students:Student[] =[];

  showAddForm: boolean = false;
  showEditForm: boolean = false;
  showDetCard:boolean=false;
  showConfirmationModal:boolean=false;
  nstd : Student = new Student(0,"",0);
  ustd : Student = new Student(0,"",0);
  hstd : Student = new Student(0,"",0);




  // addStudent(){
  //   this.students.push(new Student(this.nstd.id,this.nstd.name,this.nstd.age));

  // }
  // deleteStudent(id:number){
  //   this.studentService = this.studentService.filter(item => item.id != id);
  //   this.showConfirmationModal = false;
  // }

  // allStudents(){
  //   this.students =  this.studentService.getAll();
  // }

  editStudent(s: Student) {

  this.ustd = {...s};
  }

  // submitEdit(s:Student){
  //   const index = this.students.findIndex(item => item.id === s.id);
  //   if (index !== -1) {
  //   this.students[index].name = this.ustd.name;
  //   this.students[index].age = this.ustd.age;
  //   console.log(s.name)

  //   console.log(this.students[index].name);
  // }

  // }
  ShowStudent(s:Student){
    // this.hstd = {...s};
    this.hstd = this.studentService.getStudent(s)
  }
  deleteStudent(id:number){
    this.studentService.deletestudent(id);
  }
  submitEdit(s:Student){
    this.studentService.updateStudent(this.ustd);
  }

}




