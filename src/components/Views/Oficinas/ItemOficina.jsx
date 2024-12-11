import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ItemOficina = ({id, nombre, cantPersonal}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{cantPersonal}</td>
            <td>
                <Container>
                    <Row>
                        <Col><Button>Opcion 1</Button></Col>
                        <Col><Button>Opcion 2</Button></Col>
                    </Row>
                </Container>
            </td>
        </tr>
    );
};

export default ItemOficina;