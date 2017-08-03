import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {RouterModule} from '@angular/router';
import {AppRoutingModule,RoutedComponents} from './routes/app.routes';
//import{Material,Module} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule,MdCardModule,MdMenuModule,MdToolbarModule,MdIconModule} from '@angular/material';
import { LoginComponent } from './routes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RoutedComponents
    //HomeComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    AppRoutingModule
    //MaterialModule,
    /*
    RouterModule.forRoot([
      {path:'login',component: LoginComponent},
      {  path:'home', component:HomeComponent}
    ])
    */
      
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
