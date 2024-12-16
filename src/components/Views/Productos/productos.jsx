import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { Container} from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./Productos.css";
import MenuInicio from '../MenuInicio/MenuInicio';


const Productos = ({ logout }) => {
  const [productos, setProductos] = useState([]);

  const [movimientos, setMovimientos] = useState([]);


  useEffect(() => {
    fetch("http://localhost/archivos/depStock/obtenerProductos.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProductos(data.productos);
        } else {
          console.error("Error:", data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  //Para obtener los articulos cuya accion es salida
  useEffect(() => {
    fetch("http://localhost/archivos/depStock/obtenerMovimientos.php")
      .then((response2) => response2.json())
      .then((movs) => {
        setMovimientos(movs.movimientos);
      })
      .catch((error) => console.error("Error:", error));
    }, []);
    
  const calcularDisponibles = (productos) => { 
    let disponibles = productos.ExistenciasTotales;
    movimientos.forEach((movimiento) => { 
      if (movimiento.IdConcepto === productos.IdConcepto && movimiento.Accion === "Salida") 
      {
         disponibles -= movimiento.Cantidad*2 ; 
         if (disponibles<0) {
            disponibles=0;
         }
      } 
    }); 
    return disponibles; 
  };

    
    const [message, setMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);
    
    
    const indexOfLastProduct = currentPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
    const currentProduct = productos.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <>
    <div className='mainSection'>
    <MenuInicio logout={logout}/>
    </div>

    <div className="productos-container">
      <div className="productos-header">
        <h2>Productos Registrados</h2>
      </div>

      <table className="productos-table">
        <thead>
          <tr>
            <th>Código</th>
            <th>Artículo</th>
            <th>Rubro</th>
            <th>Existencias Totales</th>
            <th>Existencias Disponibles</th>
          </tr>
        </thead>
        <tbody>
           {currentProduct.length > 0 ? (
            currentProduct.map((productos, index) => ( 
              <tr>
              <td>{productos.IdConcepto}</td>
              <td>{productos.Articulo}</td>
              <td>{productos.Rubro}</td>
              <td>{productos.ExistenciasTotales}</td>
              <td>{calcularDisponibles(productos)}</td>
                  </tr>
                  ))
                   )  
                   : (
                    <tr>
                    <td colSpan="9">No hay productos registrados.</td>
                    </tr>
                    )}  
        </tbody>
      </table>
      <div className="pagination">
        <Button
          variant="secondary"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          <i className="fa fa-arrow-left"></i>
        </Button>
        <span>{currentPage}</span>
        <Button
          variant="secondary"
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(movimientos.length / rowsPerPage) ||
            movimientos.length === 0
          }
          className="pagination-btn"
        >
          <i className="fa fa-arrow-right"></i>
        </Button>
      </div>
     
      {/* {message && <p>{message}</p>} */}
    </div>
    </>
  );
}

export default Productos;
