import React from 'react';
import MenuInicio from '../MenuInicio/MenuInicio';

const Oficinas = ({logout}) => {
    return (
        <div className='mainSection'>
            <MenuInicio logout={{logout}}></MenuInicio>
        </div>
    );
};

export default Oficinas;