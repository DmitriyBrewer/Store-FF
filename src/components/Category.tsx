import React, { useState } from 'react';
import '../App.css'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


interface IProps {
  arr:any;
}

const Category: React.FC<IProps> = ({arr}) => {
  //'category-menu__item category-menu__item_active'

  const clickCategory = () =>{
    
  }

    return <React.Fragment>
       <div className='category-menu'>
        <div className='categody-menu__content'>
          {arr.map((element:any)=>{
            return <Link spy={true} smooth={true} duration={500} to={element.id}><div
                key={element.id}
            id={element.id}
            className={'category-menu__item category-menu__item_active'}
            onClick={clickCategory}
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