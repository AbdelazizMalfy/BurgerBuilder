import React from 'react';
import './BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends React.Component{

    render(){
    let ingredient = null ;

    switch (this.props.type) {
        case('bread-bottom'):
            return ingredient = <div className='BreadBottom'></div>
        case('bread-top'):
            return ingredient = (
            <div className='BreadTop'>
                <div className='Seeds1'></div>
                <div className='Seeds2'></div>
            </div>
            )
        case('meat'):
            return ingredient = <div className='Meat'></div>    
        case('cheese'):
            return ingredient = <div className='Cheese'></div>    
        case('salad'):
            return ingredient = <div className='Salad'></div>    
        case('bacon'):
            return ingredient = <div className='Bacon'></div>   
        default:
            return ingredient;
            
    }
    return ingredient;
    }
};


BurgerIngredients.prototypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;