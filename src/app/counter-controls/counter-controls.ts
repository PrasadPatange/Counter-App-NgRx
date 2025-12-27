import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';
// import { IncrementAction } from '../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  imports: [],
  templateUrl: './counter-controls.html',
  styleUrl: './counter-controls.css',
})
export class CounterControls {

  constructor(private store: Store){
  }

increment(){
  this.store.dispatch(increment({ value: 1}));  // 1. dispatch action  - { value: 2} pass data to action 
  // this.store.dispatch(new IncrementAction(1));  // 2. Instatiate Action 
}
decrement(){
  this.store.dispatch(decrement({value: 1}));
}
}
