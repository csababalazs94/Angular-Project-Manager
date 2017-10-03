import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  actualUserName ="Unknown User";  

  constructor(private user:UserService) { }

  ngOnInit() {
    this.actualUserName = this.user.getUserName();
  }

}
