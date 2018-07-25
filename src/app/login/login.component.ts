import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(){

  }

  public user: User;

  ngOnInit(){
    this.user = {
      email: '',
      password: ''
    }
  }

  login(model: User, valid: boolean){
    console.log(model, valid)
  }

}



export interface User {
  email: string,
  password: string
}
