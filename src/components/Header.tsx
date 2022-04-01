import React from 'react';
import '../App.css'
import BasketStoreIcon from './BasketStoreIcon';
import BurgerIcon from './icons/BurgerIcon';
import FlagSmallIcon from './icons/FlagSmallIcon';

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
          727 р 
          <BasketStoreIcon/>
        </div>
        </div>
      </header>
    </React.Fragment>
}

export default Header