import React from 'react';
import MenuInicio from './MenuInicio/MenuInicio';

const Inicio = ({logout}) => {
    return (
        <div className='mainSection'>
            <MenuInicio logout={logout}/>
            <h1>Bienvenido a la pagina prncipal :</h1>
        </div>
        
    );
};

export default Inicio;