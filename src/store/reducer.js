import { combineReducers } from "@reduxjs/toolkit";
import { searchSlice } from "./searchSlice";
import { authSlice } from "./authSlice";

export const rootReducer = combineReducers({
    search: searchSlice.reducer,
    auth: authSlice.reducer,
});