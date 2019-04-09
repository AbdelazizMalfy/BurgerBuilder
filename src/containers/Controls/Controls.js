import React from 'react';

import './Controls.css'
import Control from './Control/Contorl'



const Controls = (props) => {
    return (
        <div className="Controls">
            <Control label="Salad" type='salad' />
            <Control label="Meat" type='meat' />
            <Control label="Bacon" type='bacon' />
            <Control label="Cheese" type='cheese' />
        </div>
    )
}

export default Controls;