import React from 'react';
import '../../App.css'
import AddButton from '../icons/AddButton';
import HitIcon from '../icons/HitIcon';
import RublIconRed from '../icons/RublIconRed';
import CountButton from './CountButton';
//redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

interface IProps {
  Name:string;
  Coin:string;
  Image:string;
  onClickAdd:()=>void;
  onClickDelete:()=>void;
  onClickPlus:()=>void;
  ID:any;
}

const AssortimentItem:React.FC<IProps> = ({Name, Coin, Image, onClickAdd,onClickDelete,onClickPlus, ID}) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Basket = useSelector((state: AppState) => state.basket)
  //Redux
  let amountCheck = {
    amount: null,
    id: 0,
    name:'',
    changeButton: undefined
  }
  Basket.forEach((element:any)=>{
    amountCheck = {
      amount: element.amount,
      id: element.id ,
      name: element.name, 
      changeButton: element.changeButton
    }
  })
   
    return <div className='assortment__item'>
            <div className={'assortment__image assortment___bugrer-image'}>
              <div className='assortment__hit-label'>
              <HitIcon/>
                  </div>
                  <div
                  className='assortment__amount'>
                    {amountCheck.changeButton && ID === amountCheck.id&&Name===amountCheck.name?
                    <CountButton 
                    Name={Name}
                    ID={ID}
                    onClickDelete={onClickDelete } onClickPlus={onClickPlus}/>
                    :
                    <div onClick={onClickAdd}><AddButton/></div>
                    }
                  </div>
            </div>
            <p className='subtitle subtitle_medium'>{Name}</p>
            <p className='subtitle subtitle_price'>{Coin}
            <RublIconRed/>
            </p>
          </div>
}

export default AssortimentItem