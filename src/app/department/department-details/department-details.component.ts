import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../../_Models/department';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../_Services/department.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent implements OnInit,OnDestroy{
  dept :Department |null = null;
  sub:Subscription | null =null;
  constructor(public activetedRoute:ActivatedRoute, public departmentService:DepartmentService){
  }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(par=>{
      this.sub =this.departmentService.getById(par['id']).subscribe(d=>{
        this.dept = d;
      })
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
