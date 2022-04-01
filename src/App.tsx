import React, { useEffect } from 'react';
import './App.css'
import axios from 'axios'

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
      <header className='header'>
        <div className='header__content'>
        <div className='header__burger'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5H20V7H4V5ZM4 17H20V19H4V17ZM14 11H4V13H14V11Z" fill="black"/>
        </svg>
        </div>
        <div className='header__tick'>
        <svg width="70" height="17" viewBox="0 0 70 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="14" height="17" fill="#E4002B"/>
        <rect x="28" width="14" height="17" fill="#E4002B"/>
        <rect x="56" width="14" height="17" fill="#E4002B"/>
        </svg>
        </div>
        <div className='header__basket'>
          727 р 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.56205L7.76825 9.64018C7.41468 10.0645 6.78412 10.1218 6.35984 9.76822C5.93556 9.41466 5.87824 8.78409 6.2318 8.35982L11.2318 2.35982C11.6316 1.88006 12.3685 1.88006 12.7682 2.35982L17.7682 8.35982C18.1218 8.78409 18.0645 9.41466 17.6402 9.76822C17.2159 10.1218 16.5854 10.0645 16.2318 9.64018L12 4.56205Z" fill="#F7F6F5"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28077 9C2.6302 9 2.15284 9.61139 2.31062 10.2425L4.43189 18.7276C4.76577 20.0631 5.96572 21 7.34232 21H16.6577C18.0343 21 19.2342 20.0631 19.5681 18.7276L21.6894 10.2425C21.8471 9.61139 21.3698 9 20.7192 9H3.28077ZM12 12C11.4477 12 11 12.4477 11 13V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13C13 12.4477 12.5523 12 12 12ZM6.25761 13.361C6.11467 12.8276 6.43125 12.2792 6.96471 12.1363C7.49818 11.9934 8.04652 12.3099 8.18946 12.8434L9.22473 16.7071C9.36768 17.2406 9.05109 17.7889 8.51763 17.9319C7.98416 18.0748 7.43582 17.7582 7.29288 17.2247L6.25761 13.361ZM17.0353 12.1363C16.5018 11.9934 15.9535 12.3099 15.8105 12.8434L14.7752 16.7071C14.6323 17.2406 14.9489 17.7889 15.4824 17.9319C16.0158 18.0748 16.5642 17.7582 16.7071 17.2247L17.7424 13.361C17.8853 12.8276 17.5687 12.2792 17.0353 12.1363Z" fill="white"/>
</svg>
        </div>
        </div>
      </header>

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
