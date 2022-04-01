import React, { useEffect } from 'react';
import './App.css'
import axios from 'axios'
import Header from './components/Header';

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
      <div className='delivery'>
      <div className='delivery__options'>
      <h1 className='title'>Доставка г.Москва</h1>
      <div className='button-menu'>
      <div className='button-menu__content'>
      <button className='button button_active'>Доставка</button>
      <button className='button'>Самовывоз</button>
      </div>
      </div>     
      </div>
      </div>

      <div className='adress'>
        <div className='adress__content'>
        <div className='adress__pharam'>
          <p className='subtitle'>Улица</p>
          <span className='adress__input'>
          <input className='input' type="text" name="" id="" placeholder='остоженка'/>
          </span>
        </div>
        <div className='adress__pharam'>
          <p className='subtitle'>Дом</p>
          <span className='adress__input'>
          <input className='input' type="text" name="" id="" placeholder='остоженка'/>
          </span>
        </div>
        </div>
      </div>

      <div className='category-menu'>
        <div className='categody-menu__content'>
        <p className='category-menu__item category-menu__item_active'>Бургеры</p>
        <p className='category-menu__item'>Твистеры</p>
        <p className='category-menu__item'>Курица</p>
        <p className='category-menu__item'>Баскеты</p>
        <p className='category-menu__item'>Снэки</p>
        <p className='category-menu__item'>Соусы</p>
        <p className='category-menu__item'>Напитки</p>
        <p className='category-menu__item'>Кофе и чай</p>
        <p className='category-menu__item'>Десерты</p>
        <p className='category-menu__item'>Хиты по 50</p>
        <p className='category-menu__item'>Хиты пс</p>
        </div>
      </div>

      <div className='assortment'>
        <div className='assortment__content'>
          <p className='subtitle'>Бургеры</p>
          <div className='assortment__block'>
          <div className='assortment__item'>
            <div className='assortment__image'>
              <div className='assortment__hit-label'>ITEM</div>
              <div className='assortment__amount'>AMOUNT</div>
            </div>
            <p className='subtitle subtitle_medium'>Бургер</p>
            <p className='subtitle subtitle_price'>144 р</p>
          </div>
         </div>
        </div>
      </div>

      <footer className='footer'>
        <div className='footer__flag-box'>
          <div className='footer__flag'>
          <svg width="160" height="72" viewBox="0 0 160 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H32V71.7662H0V0ZM64 0H96V71.7662H64V0ZM160 0H128V71.7662H160V0Z" fill="#E4002B"/>
</svg>

        </div>
        </div>
        <div className='footer__content'>
        <div className='footer__item'>
          <p className='subtitle'>Раздел 1</p>
          <p className='subtitle subtitle_small'>Подраздел</p>
          <p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p>
          </div>

          <div className='footer__item'>
          <p className='subtitle'>Раздел 1</p>
          <p className='subtitle subtitle_small'>Подраздел</p>
          <p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p>
          </div> 

          <div className='footer__item'>
          <p className='subtitle'>Раздел 1</p>
          <p className='subtitle subtitle_small'>Подраздел</p>
          <p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p>
          </div> 

          <div className='footer__item'>
          <p className='subtitle'>Раздел 1</p>
          <p className='subtitle subtitle_small'>Подраздел</p>
          <p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p><p className='subtitle subtitle_small'>Подраздел</p>
          </div> 
       </div>
       <div className='footer__info'>
            <div className='footer__social'>Иконки</div>
            <div className='footer__store'>Иконки</div>
          </div>
      </footer>
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
