import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../Views/Inicio';
import Oficinas from '../Views/Oficinas/Oficinas';
import Productos from '../Views/Productos/Productos';

const RutasAdministrador = ({logout}) => {
    return (
        <Routes> 
            <Route 
            exact path='/'
            element={<Inicio logout={logout}></Inicio>}></Route>
            
            {/* Para Productos */}
            <Route
            exact path='/Productos'
            element={<Productos logout={logout}></Productos>}></Route>
            {/*Para Oficinas*/}
            <Route 
            exact path='/oficinas'
            element={<Oficinas logout={logout}></Oficinas>}
            ></Route>
        </Routes>
    );
};

export default RutasAdministrador;