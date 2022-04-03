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
  addStreet: (state, action:PayloadAction<any>) => {
    state.map((element: any) => {
        return (element.street = action.payload);
    });
    return state;
  },
  streetValidation: (state) => {
    state.forEach((element: any) => {
      if (element.street) {
        element.streetValidation = true
      } else return element.streetValidation = false;
    });
    return state;
  },
  addHouse: (state, action:PayloadAction<any>) => {
    state.map((element: any) => {
        return (element.house = action.payload);
    });
    return state;
  },
  houseValidation: (state) => {
    state.forEach((element: any) => {
      if (element.house) {
        element.houseValidation = true
      } else return element.houseValidation = false;
    });
    return state;
  },
  }
});
export default COMMON;
