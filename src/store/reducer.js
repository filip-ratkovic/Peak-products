import { combineReducers } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";

export const rootReducer = combineReducers({
    search: searchSlice.reducer,
});