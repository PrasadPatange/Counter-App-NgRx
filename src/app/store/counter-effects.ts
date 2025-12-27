// NOTE : Effects  ( Side-effects that should be trigger for certain actions (eg: send HTTP request)) -> helper Robot -> Calls API, Does Background Work.

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";
import { of } from "rxjs";

@Injectable()
export class CounterEffects {

   loadCount:any;
   saveCount:any;

  constructor(private actions$: Actions, private store: Store<{counter: number}>) {
    // Second  Effect
    // This is use to load data from localStorage
    this.loadCount = createEffect(() => this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storeCounter = localStorage.getItem('count');
        console.log("storeCounter:",storeCounter)
        if(storeCounter) return of(set({value: +storeCounter}));  //switchMap return new observable.( convert action into observable using of() rxjs operator)
        return of(set({value: 0}))
      }) // to switch new observable change
    ))
  
   // First  Effect
    this.saveCount = createEffect(
      () =>
        this.actions$.pipe(
          ofType(increment, decrement),
          // withLatestFrom(this.store.select('counter')), OR use
          withLatestFrom(this.store.select(selectCount)),
          tap(([action, counter]) => {
            console.log("action", action);
            localStorage.setItem("count", counter.toString());
          })
        ),
      { dispatch: false } // give new value
    );
  }

 
}