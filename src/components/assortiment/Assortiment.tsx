import React, { useState } from 'react';
import '../../App.css'
import AssortimentItem from './AssortimenItem';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//redux
import { useSelector, useDispatch } from "react-redux";
import BASKET from "../../store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

interface IProps {
  arr:any;
}


const Assortiment: React.FC<IProps> = ({arr}) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Basket = useSelector((state: AppState) => state.basket)
  //Redux
  // let deliveryCheck = false
  let deliveryCheck = {
    delivery: false
  }
  Basket.forEach((element:any)=>{
    deliveryCheck = {
      delivery: element.delivery
    }
  })


    return <React.Fragment>
      {arr.map((el:any)=>{
        return  <Element name={el.id}><div className='assortment'>
        <div className='assortment__content'>
          <p className='subtitle'>{el.name}</p>
          <div className='assortment__block'>
            {/* {el.products.map((al:any)=>{
                  return <AssortimentItem Name={al.name} Coin={al.price} Image={al.img}/>
            })} */}
            {el.products.map((al:any)=>{
              if(deliveryCheck.delivery === true) {
                if (al.delivery === true) {
                  return <AssortimentItem Name={al.name} Coin={al.price} Image={al.img}/>
                }
              } if (deliveryCheck.delivery === false) {
                return <AssortimentItem Name={al.name} Coin={al.price} Image={al.img}/>
              }
            })}
          </div> 
        </div>
      </div>
      </Element>
      })}
    </React.Fragment>
}

export default Assortiment