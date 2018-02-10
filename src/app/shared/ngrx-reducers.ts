import {Action} from '@ngrx/store';
import * as IncrementOperation   from './ngrx-actions';
const INTIAL_STATE ={
        counter:10,
}
export interface IAppState{
    counter:number;
}


export function CounterReducers(state:number=0,action:IncrementOperation.PerformIncrementOperationAction){

    switch(action.type){
        case IncrementOperation.INCREMENT_BY_ONE: {           
            
            return  state + 1;
           
        }
                                    
        default :
                             return state;
    }


}