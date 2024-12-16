import React, { useEffect, useState } from 'react';
import MenuInicio from '../MenuInicio/MenuInicio';
import { Container, Table } from 'react-bootstrap';
import ItemOficina from './ItemOficina';
import { fetchCentros } from '../../helpers/oficinas';

const Oficinas = ({logout}) => {
    const [data, setData]=useState({
        centros:[]
    });

    useEffect(() => {
        const loadData = async () => {
            try {
                const oficinas = await fetchCentros(); // Espera a que se resuelva la promesa
                setData({ centros: oficinas }); // Establece el estado correctamente
                console.log(data.centros);
            } catch (error) {
                console.log("Error al cargar los datos: ", error);
            }
        };
        loadData();
    }, []);

    console.log(data.centros);
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
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.centros.map((centro) => (
                            <ItemOficina id={centro.IdCentro} nombre={centro.Centro}></ItemOficina>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Oficinas;