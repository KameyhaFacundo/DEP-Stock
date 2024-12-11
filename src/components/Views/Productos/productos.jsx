import React from 'react';
import { Container, Table, Form, Col, Button, Row } from 'react-bootstrap';
import MenuInicio from '../MenuInicio/MenuInicio';

const Productos = ({logout}) => {
  return (
    <>
    <div className='mainSection'>
           <MenuInicio logout={{logout}}></MenuInicio>
    </div>
    <section>

    {/* import React, { useState } from 'react'; */}

{/* function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Término de búsqueda:', searchTerm);
    // Aquí realizarías la búsqueda y mostrarías los resultados
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Buscar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
} */}

      <Form >
      <Row className="align-items-center">
        <Col sm={3} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Producto
          </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Producto..." />
        </Col>
        <Col xs="auto" className="my-1">
          <Button type="submit">Submit</Button>
        </Col>
      </Row>
    </Form>
    </section> 

    <Container className='py-2 px-4'>
      <Table responsive striped border hover> 
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Productos;
