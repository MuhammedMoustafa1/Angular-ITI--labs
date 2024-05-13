import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../_Services/student.service';
import { Student } from '../../_Models/student'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit,OnDestroy {
  stds:Student[]=[];
  sub:Subscription | null =null;

  constructor(public studentService:StudentService, public router:Router){
  }


    showAddForm: boolean = false;
  showEditForm: boolean = false;
  showDetCard:boolean=false;
  showConfirmationModal:boolean=false;
  nstd : Student = new Student(0,"",0);
  ustd : Student = new Student(0,"",0);
  hstd : Student = new Student(0,"",0);
  students: Student[] = [];


  // allStudents(){
  //   this.students =  this.studentService.getAll();
  // }
ngOnInit(): void {
    this.sub= this.studentService.getAll().subscribe(data=>this.stds=data);
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
   editStudent(s: Student) {

  this.ustd = {...s};
  }

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
  goToAdd(){
    //this.showAddForm = true;
    this.router.navigate(['/students/add']);
  }

  // ngOnInit():void
  // {
  //   this.studentService.getAll();
  // }


}
