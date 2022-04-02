import React from 'react';
import '../../App.css'
import MinusIcon from '../icons/MinusIcon';
import PlusIcon from '../icons/PlusIcon';

const CountButton = () => {
    return <React.Fragment>
         <div className='count-button'>
             <MinusIcon/>
             <h4 className='count-button__text'>1</h4>
             <PlusIcon/>
             {/* <h4 className='count-button__text'>+</h4> */}
         </div>
    </React.Fragment>
}

export default CountButton