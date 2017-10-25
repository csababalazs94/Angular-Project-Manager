import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import  {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {MessagesModule} from 'primeng/primeng';
import {MenubarModule} from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';

const appRoutes:Routes = [
  // {
     //path: 'users',
     //pathMatch: 'full',
  //   children: [
  //     {
  //       path: ':name',
  //       component: UserComponent
  //     }, 
  //     {
  //        path: ':name/:id',
  //        component: UserComponent
  //     }
  //   ]
  // },
   {
     path: 'dashboard',
     canActivate: [AuthguardGuard],
     component: DashboardComponent
   },
  {
    path: '',
    //redirectTo: 'users/mehulmpt/1',
    //pathMatch: 'prefix',
    component: LoginFormComponent,
  }, 
  // {
  //   path: '**',
  //   component: NotfoundComponent
  // }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    LoginFormComponent, 
    FooterComponent, 
    DashboardComponent//,
    // UserComponent,
    // NotfoundComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  HttpModule,
  MessagesModule,
  MenubarModule
  //PopupModule.forRoot()
  
  ],
  providers: [HeaderComponent,UserService, AuthguardGuard,MessagesModule,MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
