import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../Views/Inicio';

const RutasAdministrador = () => {
    return (
        <Routes>
            <Route 
            exact path='/home'
            element={<Inicio></Inicio>}></Route>
        </Routes>
    );
};

export default RutasAdministrador;