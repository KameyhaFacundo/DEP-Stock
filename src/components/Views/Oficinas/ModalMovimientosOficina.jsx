import React, { useEffect, useState } from "react";
import { fetchMovimientosDeCentro } from "../../helpers/oficinas";
import { Modal, Table } from "react-bootstrap";


const ModalMovimientosOficina = ({show, handleClose, idOficina}) => {
    const [data, setData] = useState({
        movimientos:[]
    });

    useEffect(()=>{
        if(show && idOficina)
        {
            //Cuando el modal se muestra y se tiene el id de la oficina.
            const loadMovimientos = async () => {
                try
                {
                    const movimientos = await fetchMovimientosDeCentro(idOficina);
                    setData({movimientos: movimientos});
                }catch(error){
                    console.error("Error al cargar los movimientos: ",error);
                }
            };
            loadMovimientos();
        }
    }, []); 

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bolder">Movimientos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {data.movimientos.length===0? (
                    <p className="text-danger">No se encontraron movimientos para esta oficina.</p>
                ) : (
                    <Table responsive striped bordered hover className="text-center">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Accion</th>
                                <th>Articulo</th>
                                <th>Unidad</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.movimientos.map((movimiento, index) => (
                                <tr key={index}>
                                    <td>{movimiento.fecha}</td>
                                    <td>{movimiento.accion}</td>
                                    <td>{movimiento.producto}</td>
                                    <td>{movimiento.unidad}</td>
                                    <td>{movimiento.cantidad}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Modal.Body>
        </Modal>
    )
};

export default ModalMovimientosOficina;