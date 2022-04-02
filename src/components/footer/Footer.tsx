import React from 'react';
import '../../App.css'
import FlagBigIcon from '../icons/FlagBigIcon';
import SocialIcons from '../icons/SocialIcons';
import StoreAppIcon from '../icons/StoreAppIcon';
import ElipseSVG from './ElipseSVG';
import FooterItem from './FooterItem';

const Footer = () => {
    return <React.Fragment>
       <footer className='footer'>
         <div className='footer__box'>
        <div className='footer__flag-box'>
          <FlagBigIcon/>
        </div>
        <div className='footer__content'>
          <FooterItem/>
          <FooterItem/>
          <ElipseSVG/>
          <FooterItem/>
          <FooterItem/>
       </div>
       <div className='footer__info'>
         <div className='footer__empty-fake'></div>
            <div className='footer__social'><SocialIcons/></div>
            <div className='footer__store'><StoreAppIcon/></div>
          </div>
      </div>
      </footer>
    </React.Fragment>
}

export default Footer