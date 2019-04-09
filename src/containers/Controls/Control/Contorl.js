import React from 'react';
import './Control.css';

const Control = (props) => {
    return (
        <div className='Control'>
            <div className='Label'>{props.label}</div>
            <button className='Less' >Less</button>
            <button className='More'>More</button>
        </div> 
    )
}


export default Control;