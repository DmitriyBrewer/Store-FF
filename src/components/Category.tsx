import React from 'react';
import '../App.css'

const Category = () => {
    return <React.Fragment>
       <div className='category-menu'>
        <div className='categody-menu__content'>
        <p className='category-menu__item category-menu__item_active'>Бургеры</p>
        <p className='category-menu__item'>Твистеры</p>
        <p className='category-menu__item'>Курица</p>
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