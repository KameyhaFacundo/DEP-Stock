import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../Views/Inicio';

const RutasAdministrador = ({logout}) => {
    return (
        <Routes>
            <Route 
            exact path='/'
            element={<Inicio logout={logout}></Inicio>}></Route>
            
            {/* Para Productos */}
            <Route
            exact path='/Productos'
            element={<Inicio logout={logout}></Inicio>}></Route>
        </Routes>
    );
};

export default RutasAdministrador;