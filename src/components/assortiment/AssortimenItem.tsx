import React from 'react';
import '../../App.css'
import AddButton from '../icons/AddButton';
import HitIcon from '../icons/HitIcon';
import NewIcon from '../icons/NewIcon';
import RublIconRed from '../icons/RublIconRed';
import CountButton from './CountButton';
//redux
import { useSelector, useDispatch } from "react-redux";
import COMMON from "../../store/reducer/commonSlice";
import BASKET from "../../store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

interface IProps {
  Name:string;
  Coin:string;
  Image:string;
  changeButton?: any;
  onClickAdd:()=>void;
  onClickDelete:()=>void;
  onClickPlus?:()=>void;
  ID?:any;

}

const AssortimentItem:React.FC<IProps> = ({Name, Coin, Image, onClickAdd,onClickDelete, changeButton,onClickPlus, ID}) => {
  //Redux
  const dispatch: AppDispatch = useDispatch();
  const Common = useSelector((state: AppState) => state.common)
  const Basket = useSelector((state: AppState) => state.basket)
  //Redux
  // let deliveryCheck = false
  let amountCheck = {
    amount: null,
    id: 0,
    name:''
  }
  Basket.forEach((element:any)=>{
    amountCheck = {
      amount: element.amount,
      id: element.id ,
      name: element.name
    }
  })
   
    return <div className='assortment__item'>
            {/* <div className={'assortment__image assortment___bugrer-image'}> */}
            <div className={'assortment__image assortment___bugrer-image'}>
              <div className='assortment__hit-label'>
              <HitIcon/>
                  {/* <NewIcon/> */}
                  </div>
              <div className='assortment__amount'>
                  {ID === amountCheck.id&& Name === amountCheck.name && amountCheck.amount !== 0? <CountButton onClickDelete={onClickDelete } onClickPlus={onClickPlus}/> : <div onClick={onClickAdd} style={{cursor:'pointer'}}>
                    <AddButton/> 
                  </div>}
                  </div>
            </div>
            <p className='subtitle subtitle_medium'>{Name}</p>
            <p className='subtitle subtitle_price'>{Coin}
            <RublIconRed/>
            </p>
          </div>
}

export default AssortimentItem