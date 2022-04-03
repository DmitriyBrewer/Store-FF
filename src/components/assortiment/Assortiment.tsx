import React, { useState } from 'react';
import '../../App.css'
import AssortimentItem from './AssortimenItem';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//redux
import { useSelector, useDispatch } from "react-redux";
import COMMON from "../../store/reducer/commonSlice";
import BASKET from "../../store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
import { idText } from 'typescript';
//redux

interface IProps {
  arr:any;
}


const Assortiment: React.FC<IProps> = ({arr}) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Common = useSelector((state: AppState) => state.common)
  const Basket = useSelector((state: AppState) => state.basket)
  //Redux
  // let deliveryCheck = false
  let deliveryCheck = {
    delivery: false
  }
  Common.forEach((element:any)=>{
    deliveryCheck = {
      delivery: element.delivery
    }
  })

  let activeID = {
    activeCategory: ''
  }
  Basket.forEach((element:any)=>{
    activeID = {
      activeCategory: element.activeCategory
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
                  return <AssortimentItem Name={al.name} Coin={al.price} Image={al.img} 
                  onClickAdd={()=>{
                    dispatch(BASKET.actions.addItem({name:al.name, id: al.id, price: al.price, delivery: al.delivery, img: al.img, amount: 1 }))
                  }}
                  onClickDelete={()=>{
                    dispatch(BASKET.actions.MinusItem(al.id))
                  }}
                  />
                }
              } if (deliveryCheck.delivery === false) {
                return <AssortimentItem 
                Name={al.name} 
                Coin={al.price} 
                Image={al.img}
                ID={al.id}

                onClickAdd={()=>{
                  dispatch(BASKET.actions.addItem({name:al.name, id: al.id, price: parseInt(al.price),amountPrice:parseInt(al.price), delivery: al.delivery, img: al.img, amount: 1 }))

                  dispatch(BASKET.actions.reducePrice(1))
                }}

                onClickDelete={()=>{
                  dispatch(BASKET.actions.MinusItem(al.id))
                    dispatch(BASKET.actions.deleteItem(al.id))
                    dispatch(BASKET.actions.reducePrice(1))
                }}

                onClickPlus={()=>{
                  dispatch(BASKET.actions.PlusItem(al.id))
                  dispatch(BASKET.actions.reducePrice(1))

                }}
                changeButton = {activeID.activeCategory}
                
                />
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