import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IHop {
  addCase:any;
  fetchById:any;
}


const BASKET = createSlice({
  name: "basket",
  initialState: [{}] as IHop[],
  reducers: {
   filterDelivery: (state, action:PayloadAction<any> ) => {
     state.map((element:any)=>{
       element.delivery = action.payload
     })
     return state
   }
  }
});
export default BASKET;