import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ItemOficina = ({id, nombre}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>
                <Container>
                    <Row>
                        <Col><Button>Movimientos</Button></Col>
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default ItemOficina;