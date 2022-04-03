import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IBasket {
  addCase:any;
  fetchById:any;
  amount:number;
  amountPrice:any;
  changeButton:any;
}

const BASKET = createSlice({
  name: "basket",
  initialState: [] as IBasket[],
  reducers: {
   addItem: (state, action:PayloadAction<any>) => {
        state.push(action.payload)
        return state;
   },
   activeCategory:(state, action:PayloadAction<any>) => {
    state.map((el:any)=>{
      if (el.amount&&el.changeButton&&el.id===action.payload&&el.name===el.img) {
        el.activeCategory = true
      }
    })
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
      element.selectedItem = action.payload
       if(element.id === element.selectedItem && element.amount > 0) {
          element.amount -= 1
          element.amountPrice = element.price * element.amount
       }
     })
     return state
  },
  PlusItem: (state, action: PayloadAction<any>) => {
    state.map((element:any)=>{
      element.selectedItem = action.payload
      if(element.id === element.selectedItem && element.changeButton) {
       element.amount += 1
       element.amountPrice = element.price * element.amount
      }
    })
    return state
 },
 reducePrice: (state) => {

  var initialValue = 0;
  let sum = state.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amountPrice,
      initialValue
  );
  state.map((el:any)=>{
      el.basket = sum
  })
 },
 changeButton: (state) => {
   state.map((el:any)=>{
     if (el.amount >= 1) {
       el.changeButton = true
     }if (el.amount === 0) {
      el.changeButton = false
     }
   })
   return state
 },
 sendBasket: (state) => {
for (let i=0;i<state.length;i++)state.splice(i)
return state
}, 
selectedItem: (state, action: PayloadAction<any>) => {
  state.map((element: any) => {
    element.selectedItem = action.payload
  } 
  )
  return state;
},
  }
});
export default BASKET;
