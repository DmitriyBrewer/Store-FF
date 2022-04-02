import React from 'react';
import '../../App.css'
import AssortimentItem from './AssortimenItem';

interface IProps {
  arr:any;
}

const Assortiment: React.FC<IProps> = ({arr}) => {
    return <React.Fragment>
      {arr.map((el:any)=>{
        return  <div className='assortment'>
        <div className='assortment__content'>
          <p className='subtitle'>{el.name}</p>
          <div className='assortment__block'>
            {el.products.map((al:any)=>{
              return <AssortimentItem Name={al.name} Coin={al.price} Image={al.img}/>
            })}
          </div>
        </div>
      </div>
      })}
    </React.Fragment>
}

export default Assortiment