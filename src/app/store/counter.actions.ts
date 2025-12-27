// NOTE : Action ( The "What happened") - is like button click -> I want to do something. 

import { Action, createAction, props } from "@ngrx/store";

//when we reload counter app then the counter value get from localSorage
export const init = createAction(
    '[Counter] Init'
)

export const set = createAction(
    '[Counter] Set',
    props<{value: number}>()
)


export const increment = createAction(
    '[Counter Increment]',
    props<{value:number}>() // attaching Data to Actions
)

export const decrement = createAction(
    '[Counter Decrement]',
    props<{value:number}>() // attaching Data to Actions
)
//********************** OR *********************************/
// Alternate way of defining Action

// export const INCREMENT = '[Counter Increment]'

// export class IncrementAction implements Action {
//     readonly type = INCREMENT;

//     constructor(public value: number){}
    
// }

// export type CounterActions  = IncrementAction; // add group of actions