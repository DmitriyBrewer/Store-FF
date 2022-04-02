import React from 'react';
import '../App.css'

interface IProps {
  arr:any;
}

const Delivery: React.FC<IProps> = ({arr}) => {
    return <React.Fragment>
       <div className='delivery'>
      <div className='delivery__block'>
      <div className='delivery__options'>
      <h1 className='title'>Доставка г.Москва</h1>
      <div className='button-menu'>
      <div className='button-menu__content'>
      <button className='button button_active'>Доставка</button>
      <button className='button'>Самовывоз</button>
      </div>
      </div>     
      </div>
      </div>

      <div className='adress'>
        <div className='adress__content'>
        <div className='adress__pharam'>
          <p className='subtitle'>Улица</p>
          <span className='adress__input'>
          <input className='input' type="text" name="" id="" placeholder='Остоженка'/>
          </span>
        </div>
        <div className='adress__pharam'>
          <p className='subtitle'>Дом</p>
          <span className='adress__input'>
          <input className='input' type="text" name="" id="" placeholder='Остоженка'/>
          </span>
        </div>
        </div>
      </div>
      </div>
    </React.Fragment>
}

export default Delivery