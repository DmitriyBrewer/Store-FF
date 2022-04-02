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
      <Delivery/>
      <Category/>
      <Assortiment/>
      <Footer/>
      {/* <div>
        {appState.map((element:any)=>{
          if (element.name==='Burger') {
            return <div>{element.products.map((al:any)=>{
              return <div>{al.name}</div>
            })}</div>
        } if (element.name==='Twister') {
          return <div>{element.products.map((al:any)=>{
            return <div style={{color:'red'}}>{al.name}{al.img}</div>
          })}</div>
        }
        })}
      </div> */}
    </React.Fragment>
  );
}

export default App;
