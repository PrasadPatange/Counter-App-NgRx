import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducers';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './store/counter-effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ counter: counterReducer }) // may have multiple reducer eg. auth: authReducer, etc. provideStore() - global store
    ,
    provideEffects([CounterEffects])
]
};
