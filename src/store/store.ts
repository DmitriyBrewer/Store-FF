import { configureStore, combineReducers } from "@reduxjs/toolkit";
import common from "./reducer/commonSlice";
import basket from "./reducer/basketSlice";

import { useDispatch } from 'react-redux'


const rootReducer = combineReducers({
  common: common.reducer,
  basket: basket.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

