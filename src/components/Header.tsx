import React from 'react';
import '../App.css'
import BasketStoreIcon from './icons/BasketStoreIcon';
import BurgerIcon from './icons/BurgerIcon';
import FlagSmallIcon from './icons/FlagSmallIcon';
import RublIcon from './icons/RublIcon';
//redux
import { useSelector, useDispatch } from "react-redux";
import COMMON from "../store/reducer/commonSlice";
import BASKET from "../store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "../store/store";
import { idText } from 'typescript';
//redux

const Header = () => {
   //Redux
   const dispatch: AppDispatch = useDispatch();
   const Common = useSelector((state: AppState) => state.common)
   const Basket = useSelector((state: AppState) => state.basket)
   //Redux
   let basketPrice = {
    basket: 0
  }
  Basket.forEach((element:any)=>{
    basketPrice = {
      basket: element.basket
    }
  })

    return <React.Fragment>
        <header className='header'>
        <div className='header__content'>
        <div className='header__burger'>
        <BurgerIcon/>
        </div>
        <div className='header__tick'>
        <FlagSmallIcon/>
        </div>
        <div className='header__basket' onClick={()=>{
          dispatch(BASKET.actions.sendBasket())
          console.log('Корзина очищена:');
          console.log(Basket);
        }}>
          <p className='header__basket-text'>{basketPrice.basket}</p>
          <div className='header__rubl'>
           <RublIcon/>
           </div>
          <BasketStoreIcon/>
        </div>
        </div>
      </header>
    </React.Fragment>
}

export default Header