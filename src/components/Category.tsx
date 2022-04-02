import React, { useState } from 'react';
import '../App.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
//redux
import { useSelector, useDispatch } from "react-redux";
import BASKET from "../store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "../store/store";
//redux


interface IProps {
  arr:any;
}

const Category: React.FC<IProps> = ({arr}) => {
  //'category-menu__item category-menu__item_active'
//Redux
const dispatch: AppDispatch = useDispatch();
const Basket = useSelector((state: AppState) => state.basket)
let activeID = {
  activeCategory: ''
}
Basket.forEach((element:any)=>{
  activeID = {
    activeCategory: element.activeCategory
  }
})
//Redux

    return <React.Fragment>
       <div className='category-menu'>
        <div className='categody-menu__content'>
          {arr.map((element:any)=>{
            return <Link 
            spy={true} 
            smooth={true} 
            duration={500} 
            to={element.id}
            >
            <div
            className={activeID.activeCategory === element.id? 'category-menu__item category-menu__item_active' : 'category-menu__item'}
            key={element.id}
            id={element.id}
            onClick={()=>{
              dispatch(BASKET.actions.activeCategory(element.id))
            }}
            >
              {element.name}
            </div>
            </Link>
          })}
        <div className='category-menu__item'>Баскеты</div>
        <div className='category-menu__item'>Снэки</div>
        <div className='category-menu__item'>Соусы</div>
        <div className='category-menu__item'>Напитки</div>
        <div className='category-menu__item'>Кофе и чай</div>
        <div className='category-menu__item'>Десерты</div>
        <div className='category-menu__item'>Хиты по 50</div>
        <div className='category-menu__item'>Хиты пс</div>
        </div>
      </div>
    </React.Fragment>
}

export default Category