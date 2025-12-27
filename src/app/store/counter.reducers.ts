// NOTE : Reducer (The "How it changes") - is like rule book -> Its Decides HOW data changes.

import { Action, createReducer, on } from "@ngrx/store";
// import { CounterActions, INCREMENT, IncrementAction } from "./counter.actions";
import { decrement, increment, set } from "./counter.actions";

export const initialState = 0;


export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value ), // listen to action  - action.value extract data
    on(decrement, (state, action) => state - action.value ),
    on(set, (state, action) => action.value), // counter value retrive from localStorage
);
//********************** OR *********************************/
// Older version
// Handling Actions without createReducer

// export function counterReducer(state = initialState, action: CounterActions  | Action){
//     if(action.type == INCREMENT){
//         return state + (action as IncrementAction).value;
//     }
//     return state
// }