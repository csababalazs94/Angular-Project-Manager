import { Injectable } from '@angular/core';
import {Http, Response, HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  userHandlerContextRoot :string = 'http://127.0.0.1:3000/api/v1/users';
  userData: any = {};

  private isUserLoggedIn;
  private userName;
  name : String;

  constructor(private http:Http) { 
    this.isUserLoggedIn = false; 
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  handleLogin(username: String, userPassword: String) {
    this.userName = username;
    this.getUserByuserName(username);
  }

  getUserName() {
    return this.userName;
  }

  getUserByuserName(username: String) {
    var context = this.userHandlerContextRoot + '/' + username;
   return this.http.get(context).map(response =>  response.json());
  }

}
