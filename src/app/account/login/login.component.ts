import { Component } from '@angular/core';
import { AccountService } from '../../_Services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public accountService:AccountService){}
  login(){
    this.accountService.login("","")

  }

}
