import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface ICommon {
  addCase:any;
  fetchById:any;
}

const COMMON = createSlice({
  name: "common",
  initialState: [{}] as ICommon[],
  reducers: {
   filterDelivery: (state, action:PayloadAction<any> ) => {
     state.map((element:any)=>{
       element.delivery = action.payload
     })
     return state
   },
   activeCategory: (state, action:PayloadAction<any>) => {
    state.map((element:any)=>{
      element.activeCategory = action.payload
    })
    return state
  },
  }
});
export default COMMON;
