import React from 'react';
import MenuInicio from '../MenuInicio/MenuInicio';
import { Container, Table } from 'react-bootstrap';
import ItemOficina from './ItemOficina';

const Oficinas = ({logout}) => {
    return (
        <div className='mainSection'>
            <MenuInicio logout={{logout}}></MenuInicio>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <h1 className='display-4'>Oficinas</h1>
            </div>
            <Container className='py-2'>
                <Table responsive striped bordered hover className='text-center'>
                    <thead>
                        <tr>
                            <th>Id Oficina</th>
                            <th>Nombre</th>
                            <th>Cantidad personal</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItemOficina id={1} nombre={'Computos'} cantPersonal={4}></ItemOficina>
                        <ItemOficina id={2} nombre={'Geologia'} cantPersonal={7}></ItemOficina>
                        <ItemOficina id={3} nombre={'Secretaria'} cantPersonal={1}></ItemOficina>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Oficinas;