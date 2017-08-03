import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
//import {LoginComponent} from 'login/login.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes:Routes =[
    {
        path:'',
        redirectTo:'/login',
        pathMatch:'full'
     },
     {
        path:'login',
        component:LoginComponent
        
        
     },
      {
        path:'home',
        component:HomeComponent,
        /*
        children:[
            { path:'',redirectTo:'info',pathMatch:'full'},
            {path:'aboutUs', component:AboutUsCompoent }
        ]
        */
        
     }
];
@NgModule({
        imports:[RouterModule.forRoot(routes)],
        exports: [RouterModule]
 })
export class AppRoutingModule{


}
export const RoutedComponents=[ LoginComponent,HomeComponent];