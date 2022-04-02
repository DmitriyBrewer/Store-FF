import React from 'react';
import '../../App.css'
import AssortimentItem from './AssortimenItem';

const Assortiment = () => {
    return <React.Fragment>
       <div className='assortment'>
        <div className='assortment__content'>
          <p className='subtitle'>Бургеры</p>
          <div className='assortment__block'>
          <AssortimentItem/>
          <AssortimentItem/>

         </div>
        </div>
      </div>
    </React.Fragment>
}

export default Assortiment