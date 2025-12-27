import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.html',
  styleUrl: './counter-output.css',
})
export class CounterOutput {

  count$: Observable<number>; //$ represent variable is observable.
  doubleCount$: Observable<number>; //$ represent variable is observable.
  constructor(private store: Store<{counter: number}>){
    //  this.count$ = this.store.select('counter') // reading data from the store.
     this.count$ = this.store.select(selectCount) // using selector. // get or read 
     this.doubleCount$ = this.store.select(selectDoubleCount) // using selector.
  }
}
