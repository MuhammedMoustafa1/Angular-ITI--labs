import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  isLogged=false;
  login(user:string,password:string){
    //backend
    this.isLogged=true;
    //localStorage.setItem("token",)
  }

  constructor() { }
}
