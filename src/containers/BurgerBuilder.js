import React from 'react';

import Aux from '../hoc/Container';
import Burger from '../components/Burger/Burger'
import Controls from './Controls/Controls'

class BurgerBuilder extends React.Component {
    state = {
        ingredients:{
            salad: 0 ,
            bacon: 0 ,
            cheese: 0 ,
            meat: 0
        }
    }


    // onAddClick = (type) => {
    //     this.setState({  })
    // }

    // onLessClick = (type) => {

    // }


    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <Controls/>
            </Aux>
        )
    }
}

export default BurgerBuilder;