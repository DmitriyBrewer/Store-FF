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
            {el.products.map((item:any)=>{
              if(deliveryCheck.delivery === true) {
                if (item.delivery === true) {
                return <AssortimentItem 
                Name={item.name} 
                Coin={item.price} 
                Image={item.img}
                ID={item.id}
                onClickAdd={()=>{
                  dispatch(BASKET.actions.addItem({name:item.name, id: item.id, price: parseInt(item.price), amountPrice:parseInt(item.price), delivery: item.delivery, img: item.img, amount: 1 }))

                  dispatch(BASKET.actions.reducePrice())

                  dispatch(BASKET.actions.changeButton())

                  dispatch(BASKET.actions.selectedItem(item.id))
                }}

                onClickDelete={()=>{
                  dispatch(BASKET.actions.MinusItem(item.id))
                    dispatch(BASKET.actions.deleteItem(item.id))
                    dispatch(BASKET.actions.reducePrice())
                    dispatch(BASKET.actions.changeButton())
                    dispatch(BASKET.actions.selectedItem(item.id))
                }}

                onClickPlus={()=>{
                  dispatch(BASKET.actions.PlusItem(item.id))
                  dispatch(BASKET.actions.reducePrice())
                  dispatch(BASKET.actions.selectedItem(item.id))
                }}
                  
                  />
                }
              } 
              
              if (deliveryCheck.delivery === false) {
                return <AssortimentItem 
                Name={item.name} 
                Coin={item.price} 
                Image={item.img}
                ID={item.id}
                onClickAdd={()=>{
                  dispatch(BASKET.actions.addItem({name:item.name, id: item.id, price: parseInt(item.price), amountPrice:parseInt(item.price), delivery: item.delivery, img: item.img, amount: 1 }))

                  dispatch(BASKET.actions.reducePrice())

                  dispatch(BASKET.actions.changeButton())

                  dispatch(BASKET.actions.selectedItem(item.id))
                }}

                onClickDelete={()=>{
                  dispatch(BASKET.actions.MinusItem(item.id))
                    dispatch(BASKET.actions.deleteItem(item.id))
                    dispatch(BASKET.actions.reducePrice())
                    dispatch(BASKET.actions.changeButton())
                    dispatch(BASKET.actions.selectedItem(item.id))
                }}

                onClickPlus={()=>{
                  dispatch(BASKET.actions.PlusItem(item.id))
                  dispatch(BASKET.actions.reducePrice())
                  dispatch(BASKET.actions.selectedItem(item.id))
                }}
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