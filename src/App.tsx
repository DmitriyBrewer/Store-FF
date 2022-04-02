import React, { useEffect } from 'react';
import './App.css'
import axios from 'axios'
import Header from './components/Header';
import Delivery from './components/Delivery';
import Category from './components/Category';
import Assortiment from './components/assortiment/Assortiment';
import Footer from './components/footer/Footer';

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
  const [delivery, setDelivery] = React.useState(true)


  useEffect(()=>{
    const apiUrl = 'http://localhost:5000/';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  },[setAppState])
console.log(appState);

  
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
