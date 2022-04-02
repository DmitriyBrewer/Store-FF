import React, { useState } from 'react';
import '../../App.css'
import AssortimentItem from './AssortimenItem';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

interface IProps {
  arr:any;
}

const Assortiment: React.FC<IProps> = ({arr}) => {
    return <React.Fragment>
      {arr.map((el:any)=>{
        return  <Element name={el.id}><div className='assortment'>
        <div className='assortment__content'>
          <p className='subtitle'>{el.name}</p>
          <div className='assortment__block'>
            {el.products.map((al:any)=>{
                  return <AssortimentItem Name={al.name} Coin={al.price} Image={al.img}/>
            })}
          </div> 
        </div>
      </div>
      </Element>
      })}
    </React.Fragment>
}

export default Assortiment