import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IBasket {
  addCase:any;
  fetchById:any;
  amount:number;
  amountPrice:any;
}

const BASKET = createSlice({
  name: "basket",
  initialState: [] as IBasket[],
  reducers: {
   addItem: (state, action:PayloadAction<any>) => {
        state.push(action.payload)
   },
   activeCategory:(state, action:PayloadAction<any>) => {
    state.map((element:any)=>{
      if(action.payload === element.id) {
        element.activeCategory = true
      } else element.activeCategory = false
    })
    return state
   },
  //  deleteItem: (state, action: PayloadAction<any>) => {
  //   return state.filter((element: any) => 
  //   element.id !== action.payload);
  // },
   deleteItem: (state, action: PayloadAction<any>) => {
    return state
  },
  MinusItem: (state, action: PayloadAction<any>) => {
     state.map((element:any)=>{
       if(element.id === action.payload && element.amount > 0) {
          element.amount -= 1
          element.amountPrice = element.price * element.amount
       }
     })
     return state
  },
  PlusItem: (state, action: PayloadAction<any>) => {
    state.map((element:any)=>{
      if(element.id === action.payload) {
       element.amount += 1
       element.amountPrice = element.price * element.amount
      }
    })
    return state
 },
 reducePrice: (state, action: PayloadAction<any>) => {
  //  state.map((el:any)=>{
  //   //  el.basket = 150
  //   el.basket = 150
    
  //  })

  var initialValue = 0;
  let sum = state.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amountPrice,
      initialValue
  );
  state.map((el:any)=>{
      el.basket = sum
  })
 },
 sendBasket: (state) => {
  // return state.filter((el:any)=>el)

for (let i=0;i<state.length;i++)state.splice(i)
return state
}, 
  }
});
export default BASKET;
