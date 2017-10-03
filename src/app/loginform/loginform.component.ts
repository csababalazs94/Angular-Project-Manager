import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService} from '../user.service';
//import {PasswordPopupComponent} from '../password-popup/password-popup.component'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginFormComponent implements OnInit {
  userToLogin : String;
  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {}

  loginUser(e) {
  	e.preventDefault();
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    this.userToLogin = username;
  	this.user.handleLogin(username,password);
    this.changePage(password);
      		
  }

  changePage(givenPW: String) {
    this.user.getUserByuserName(this.userToLogin).subscribe(res => {
      console.log("ActualPW" + res.data.password);
      console.log("Given PW" + givenPW);
      if(res.data.password == givenPW){
        console.log("was true");
        this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
      }else{
       // this.popup.showPopup();
      }
  });
  }


}
