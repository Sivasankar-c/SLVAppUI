import {Action} from '@ngrx/store';
export const INCREMENT_BY_ONE="INCREMENT_BY_ONE";
export class PerformIncrementOperation implements Action{
    readonly type = INCREMENT_BY_ONE;
    //payload:number;

}
export type PerformIncrementOperationAction =PerformIncrementOperation;