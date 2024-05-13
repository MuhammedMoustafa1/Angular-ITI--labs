import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { canLoginGuard } from './guards/can-login.guard';
import { LoginComponent } from './account/login/login.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DeleteDepartmentComponent } from './department/delete-department/delete-department.component';


export const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'departments', component:DepartmentListComponent},
  { path: 'departments/add', component:DepartmentAddComponent},
  { path: 'departments/details/:id', component:DepartmentDetailsComponent},
  { path: 'departments/edit/:id', component:DepartmentEditComponent},
  { path: 'departments/delete/:id', component:DeleteDepartmentComponent},
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:AccountComponent,canActivate:[canLoginGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'account' , component:AccountComponent},
  // {path:'students', component:StudentListComponent,children:[
  //   {path:"details/:id",component:StudentDetailsComponent},
  //   {path:"add",component:StudentAddComponent}
  // ]},

  {path:"students", loadChildren:()=>import("./student/student.routes").then(a=>a.stdRoutes)},



  { path: '**' , component:NotFoundComponent}


];
