import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';


export const stdRoutes: Routes = [
  {path:'', component:StudentListComponent},
  {path:'add', component:StudentAddComponent},
  {path:'details/:id', component:StudentDetailsComponent},
  {path:'edit/:id', component:StudentEditComponent},
  {path:'delete/:id',component:StudentDeleteComponent}
]


