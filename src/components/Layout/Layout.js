import React from 'react';
import Aux from '../../hoc/Container'


const Layout = (props) => {
    return (
        <Aux>
            <div className="mb-3">Toolbar, SideDrawer, backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};

export default Layout