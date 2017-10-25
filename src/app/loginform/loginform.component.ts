import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService} from '../user.service';
import { DialogModule,Dialog} from 'primeng/primeng';
import { SelectItem,Message} from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginFormComponent implements OnInit {
  userToLogin : String;
  msgs: Message[] = [];
  tagVisibility: String;
  constructor(private router:Router, private user:UserService,private messageService: MessageService, private headerComponent: HeaderComponent ) { }

  ngOnInit() {this. tagVisibility="display: none;"}

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
      console.log(res);
      if(res.data == null){
        this.showPasswordError();        
      }
      else if(res.data.password == givenPW){
        console.log("was true");
        this.user.setUserLoggedIn();
        this.headerComponent.showMenuBar();
        this.router.navigate(['dashboard']);
      }
  });
  }

  showPasswordError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error:', detail:'Please enter correct password'});}

}
