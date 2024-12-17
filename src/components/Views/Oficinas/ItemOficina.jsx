import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ModalMovimientosOficina from './ModalMovimientosOficina';

const ItemOficina = ({id, nombre, key}) => {
    const [showModalMovimientos, setShowModalMovimientos] = useState(false);
    const handleCloseModalMovimientos = () => setShowModalMovimientos(false);
    const handleShowModalMovimientos = () => setShowModalMovimientos(true);

    return (
        <tr key={key}>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>
                <Container>
                    <Row>
                        <Col><Button onClick={handleShowModalMovimientos}>Movimientos</Button></Col>
                        {
                            showModalMovimientos && <ModalMovimientosOficina show={showModalMovimientos} handleClose={handleCloseModalMovimientos} idOficina={id}></ModalMovimientosOficina>
                        }
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default ItemOficina;