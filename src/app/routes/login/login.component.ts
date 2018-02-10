import { Component, OnInit } from '@angular/core';
import { Store }  from '@ngrx/store';
import * as incrementOperationsAction from '../../shared/ngrx-actions';
import {IAppState} from '../../shared/ngrx-reducers';
import {UserIdleService} from 'angular-user-idle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store:Store<IAppState>, private userIdle:UserIdleService) { }

  ngOnInit() {
    //Start watching for user inactivity.
    this.userIdle.startWatching();
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log("count=>",count));
    this.userIdle.onTimeout().subscribe(() => console.log('Time is up!'));
  }

  btnIncrement(){
    this.store.dispatch(new incrementOperationsAction.PerformIncrementOperation());

  }

}
