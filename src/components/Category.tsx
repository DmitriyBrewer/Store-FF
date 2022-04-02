import React, { useState } from 'react';
import '../App.css'

interface IProps {
  arr:any;
}

const Category: React.FC<IProps> = ({arr}) => {
  const [buttonStyle, setButtonStyle] = React.useState('category-menu__item')


  //'category-menu__item category-menu__item_active'

  const clickCategory = () =>{
    
  }

    return <React.Fragment>
       <div className='category-menu'>
        <div className='categody-menu__content'>
          {arr.map((element:any)=>{
            return <p
            id={element.id}
            className={buttonStyle}
            onClick={clickCategory}
            >
              {element.name}
            </p>
          })}
        {/* <p className='category-menu__item category-menu__item_active'>Бургеры</p>
        <p className='category-menu__item'>Твистеры</p>
        <p className='category-menu__item'>Курица</p> */}
        <p className='category-menu__item'>Баскеты</p>
        <p className='category-menu__item'>Снэки</p>
        <p className='category-menu__item'>Соусы</p>
        <p className='category-menu__item'>Напитки</p>
        <p className='category-menu__item'>Кофе и чай</p>
        <p className='category-menu__item'>Десерты</p>
        <p className='category-menu__item'>Хиты по 50</p>
        <p className='category-menu__item'>Хиты пс</p>
        </div>
      </div>
    </React.Fragment>
}

export default Category