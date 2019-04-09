import React from 'react';

import './Burger.css'
import './BurgerIngredients'
import BurgerIngredients from './BurgerIngredients';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_,i) =>{
                return <BurgerIngredients key={ingredient + i } type={ingredient} />
            } );
        }).reduce((arr,el ) =>{
            return arr.concat(el)
        } ,[]);
        console.log(transformedIngredients);

    if (transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className="Burger" >
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>

        </div>
    )
};

export default Burger;