import React from 'react';
import '../App.css'
import BasketStoreIcon from './icons/BasketStoreIcon';
import BurgerIcon from './icons/BurgerIcon';
import FlagSmallIcon from './icons/FlagSmallIcon';
import RublIcon from './icons/RublIcon';

const Header = () => {
    return <React.Fragment>
        <header className='header'>
        <div className='header__content'>
        <div className='header__burger'>
        <BurgerIcon/>
        </div>
        <div className='header__tick'>
        <FlagSmallIcon/>
        </div>
        <div className='header__basket'>
          <p className='header__basket-text'>727</p>
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