import { Component, OnInit, signal } from '@angular/core';
import { CounterOutput } from './counter-output/counter-output';
import { CounterControls } from './counter-controls/counter-controls';
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';

@Component({
  selector: 'app-root',
  imports: [CounterOutput, CounterControls],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ngrx-app');

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(init())  // initial dispatch counter value.
  }
}
