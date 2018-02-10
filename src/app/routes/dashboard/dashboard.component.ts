import { Component, OnInit } from '@angular/core';
import { Store }  from '@ngrx/store';
import {IAppState} from '../../shared/ngrx-reducers';
import{Observable,Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  count:Observable<Number>;
  subscription:Subscription;

  constructor( private store:Store<IAppState>) {
    /*
   store.subscribe((data)=>{
      console.log("dddd=",data);
      //store.getState();
    })
    */
    
   this.store.select('counter').forEach(d=>{
     console.log(d);

   });
   
  
  this.count=this.store.select('counter');
  
  

   }

 // private count:Number=0;

  ngOnInit() {
    //this.store.select()
  }

}
