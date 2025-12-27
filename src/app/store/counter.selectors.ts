// NOTE : Selector ( The "Piece you need") -> is like Magic Eyes -> See ONLY what you need.

import { createSelector } from "@ngrx/store";

export const selectCount = (state: {counter: number}) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    (state) => state * 2 
);