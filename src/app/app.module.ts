import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
//import {RouterModule} from '@angular/router';
import {AppRoutingModule,RoutedComponents} from './routes/app.routes';
import{MaterialModule,MdFormFieldModule} from '@angular/material';

//import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';

//import { MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule,MdInputContainer} from '@angular/material';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import {StoreModule} from '@ngrx/store';
import {CounterReducers} from './shared/ngrx-reducers';
import {UserIdleModule} from 'angular-user-idle';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutedComponents,
    DashboardComponent
    //HomeComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    /*
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdInputContainer,
    */
    AppRoutingModule,
    
    MaterialModule,
    MdFormFieldModule,
    
    //MDBBootstrapModule.forRoot(),
    //MaterialModule,
    /*
    RouterModule.forRoot([
      {path:'login',component: LoginComponent},
      {  path:'home', component:HomeComponent}
    ])
    */

    StoreModule.forRoot({counter:CounterReducers}),
    UserIdleModule.forRoot({idle:60,timeout:30,ping:10})
   
      
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
