import React from 'react';
import '../../App.css'
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';
//redux
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState, RootState } from "../../store/store";
//redux

interface IProps {
    onClickDelete:()=>void;
    onClickPlus:()=>void;
    ID:string;
    Name:string;
  }

const CountButton:React.FC<IProps> = ({onClickDelete,onClickPlus, ID, Name}) => {
  //Redux
  const Basket = useSelector((state: AppState) => state.basket)
  //Redux
  let amountCheck = {
    amount: 0,
    changeButton: undefined,
    id:'',
    name: '',
    other:'',
    count:0
  }
  Basket.forEach((element:any)=>{
    amountCheck = {
      amount: element.amount,
      changeButton: element.changeButton,
      id: element.id,
      name: element.name,
      other:element.other,
      count:element.count
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
         </div>
    </React.Fragment>
}

export default CountButton