import React from 'react';
import '../../App.css'
import AddButton from '../icons/AddButton';
import HitIcon from '../icons/HitIcon';
import NewIcon from '../icons/NewIcon';
import RublIconRed from '../icons/RublIconRed';
import CountButton from './CountButton';

interface IProps {
  Name:string;
  Coin:string;
  Image:string;
}

const AssortimentItem:React.FC<IProps> = ({Name, Coin, Image}) => {
    return <React.Fragment>
          <div className='assortment__item'>
            {/* <div className={'assortment__image assortment___bugrer-image'}> */}
            <div className={'assortment__image assortment___bugrer-image'}>
              <div className='assortment__hit-label'>
              <HitIcon/>
                  {/* <NewIcon/> */}
                  </div>
              <div className='assortment__amount'>
                  <CountButton/>
                  {/* <AddButton/> */}
                  </div>
            </div>
            <p className='subtitle subtitle_medium'>{Name}</p>
            <p className='subtitle subtitle_price'>{Coin}
            <RublIconRed/>
            </p>
          </div>
    </React.Fragment>
}

export default AssortimentItem