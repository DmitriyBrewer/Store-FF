import React from 'react';
import '../../App.css'
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
//redux
import { useSelector, useDispatch } from "react-redux";
import COMMON from "../../store/reducer/commonSlice";
import BASKET from "../../store/reducer/basketSlice";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

interface IProps {
    onClickDelete:()=>void;
    onClickPlus?:()=>void;
  
  }

const CountButton:React.FC<IProps> = ({onClickDelete,onClickPlus}) => {
    //Redux
  const dispatch: AppDispatch = useDispatch();
  const Common = useSelector((state: AppState) => state.common)
  const Basket = useSelector((state: AppState) => state.basket)
  //Redux
  let amountCheck = {
    amount: 1
  }
  Basket.forEach((element:any)=>{
    amountCheck = {
      amount: element.amount
    }
  })
    return <React.Fragment>
         <div className='count-button'>
             <div onClick={onClickDelete} style={{cursor:'pointer'}}>
             <MinusIcon/>
             </div>
             <h4 className='count-button__text'>{amountCheck.amount}</h4>
             <div onClick={onClickPlus} style={{cursor:'pointer'}}>
             <PlusIcon/>
             </div>
             {/* <h4 className='count-button__text'>+</h4> */}
         </div>
    </React.Fragment>
}

export default CountButton