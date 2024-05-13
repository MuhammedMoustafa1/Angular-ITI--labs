import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../_Services/student.service';
import { Student } from '../../_Models/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit,OnDestroy{
  std:Student|null = null;
  sub:Subscription|null=null;
  stds:Student[]=[];


  constructor(public activatedRoute:ActivatedRoute, public studentService:StudentService){

  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par=>{
      this.sub =this.studentService.getById(par['id']).subscribe(d=>{
        this.std = d;
      })
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
  // ngOnInit(): void {
  //   //this.activatedRoute.params.subscribe(d=>{}); it is possible for fast way
  //   this.sub = this.activatedRoute.params.subscribe({
  //     //next:(d)=>{this.std=this.studentService.getById(d['id'])},
  //     error:(e)=>{console.log(e)},
  //     complete:()=>{}
  //   })
  //   // let id = this.activatedRoute.snapshot.params['id'];
  //   // this.std = this.studentService.getById(id);
  // }
  // ngOnDestroy(){
  //   this.sub?.unsubscribe();
  // }

}
