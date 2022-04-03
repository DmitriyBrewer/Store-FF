import React, { useEffect } from 'react';
import './App.css'
import axios from 'axios'
import Header from './components/Header';
import Delivery from './components/Delivery';
import Category from './components/Category';
import Assortiment from './components/assortiment/Assortiment';
import Footer from './components/footer/Footer';
//redux
import { useSelector, useDispatch } from "react-redux";
import COMMON from "./store/reducer/commonSlice";
import BASKET from "./store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "./store/store";
//redux


function App() {
  const [appState, setAppState] = React.useState([
    {
      'id':'',
      'name':'',
      'products':[
        {'name':'',
          'id':''}
      ]
    }
  ]);
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Common = useSelector((state: AppState) => state.common)
  const Basket = useSelector((state: AppState) => state.basket)
  // console.log(Common);
  console.log(Basket);
  //Redux


  useEffect(()=>{
    const apiUrl = 'http://localhost:5000/';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
    dispatch(COMMON.actions.filterDelivery(false))
  },[setAppState])
// console.log(appState);

  
  return (
    <React.Fragment>
      <Header/>
      <Delivery arr={appState}/>
      <Category  arr={appState}/>
     <Assortiment arr={appState}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
