import React from 'react';
import MenuInicio from '../MenuInicio/MenuInicio';

const Productos = ({logout}) => {
  return (
    <div>
      <div className='mainSection'>
            <MenuInicio logout={{logout}}></MenuInicio>
            <h1>Hola</h1>
        </div>
    </div>
  );
};

export default Productos;
