import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp1/comp2/comp2.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent,DepartmentComponent,StudentAddComponent,
    StudentListComponent,Comp1Component,Comp2Component,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student';
}
