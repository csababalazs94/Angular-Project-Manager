import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import {MenubarModule,MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private  UserLoggedIn=1;
  constructor(private myUserService: UserService, ) {

   }

  ngOnInit() {
    console.log('Is user logged in: ' + this.myUserService.getUserLoggedIn());
  }

  public  showMenuBar(){
    //this.UserLoggedIn=1;
  }

  homeButtonEvent(event) {
    console.log(event);
  }
}

            