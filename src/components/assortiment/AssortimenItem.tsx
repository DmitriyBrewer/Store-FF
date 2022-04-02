import React from 'react';
import '../../App.css'
import AddButton from '../icons/AddButton';
import HitIcon from '../icons/HitIcon';
import NewIcon from '../icons/NewIcon';
import RublIconRed from '../icons/RublIconRed';
import CountButton from './CountButton';

const AssortimentItem = () => {
    return <React.Fragment>
          <div className='assortment__item'>
            <div className='assortment__image'>
              <div className='assortment__hit-label'>
              <HitIcon/>
                  {/* <NewIcon/> */}
                  </div>
              <div className='assortment__amount'>
                  <CountButton/>
                  {/* <AddButton/> */}
                  </div>
            </div>
            <p className='subtitle subtitle_medium'>Бургер</p>
            <p className='subtitle subtitle_price'>144
            <RublIconRed/>
            </p>
          </div>
    </React.Fragment>
}

export default AssortimentItem