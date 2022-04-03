import React from 'react';
import '../App.css'
//redux
import { useSelector, useDispatch } from "react-redux";
import COMMON from "../store/reducer/commonSlice";
import { AppDispatch, AppState, RootState } from "../store/store";
//redux

interface IProps {
  arr:any;
}

const Delivery: React.FC<IProps> = ({arr}) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Common = useSelector((state: AppState) => state.common)
  //Redux
  let deliveryCheck = {
    delivery: false
  }
  Common.forEach((element:any)=>{
    deliveryCheck = {
      delivery: element.delivery
    }
  })

    return <React.Fragment>
       <div className='delivery'>
      <div className='delivery__block'>
      <div className='delivery__options'>
      <h1 className='title'>Доставка г.Москва</h1>
      <div className='button-menu'>
      <div className='button-menu__content'>
      <button 
      className={!deliveryCheck.delivery? 'button' : 'button button_active'}
      onClick={()=>dispatch(COMMON.actions.filterDelivery(true))      
    }
      >Доставка</button>
      <button 
      className={deliveryCheck.delivery? 'button' : 'button button_active'}
      onClick={()=>dispatch(COMMON.actions.filterDelivery(false))      
      }
      >Самовывоз</button>
      </div>
      </div>     
      </div>
      </div>

      <div className='adress' style={{display: deliveryCheck.delivery? "flex" : "none"}}>
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