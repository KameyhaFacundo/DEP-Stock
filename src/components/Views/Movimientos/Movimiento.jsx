import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./Movimiento.css";

function Movimiento() {
  const [data, setData] = useState({
    articulos: [],
    centros: [],
    acciones: [],
  });
  const [movimientos, setMovimientos] = useState([]);
  const [selectedArticulo, setSelectedArticulo] = useState("");
  const [selectedCentro, setSelectedCentro] = useState("");
  const [selectedAccion, setSelectedAccion] = useState("");
  const [formData, setFormData] = useState({
    FechaMov: "",
    Cantidad: "",
    DescripUnidad: "",
    Unidad: "",
    Motivo: "",
  });
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  useEffect(() => {
    fetch("http://localhost/archivos/depStock/movimiento.php")
      .then((response) => response.json())
      .then((data) =>
        setData({
          articulos: data.articulos || [],
          centros: data.centros || [],
          acciones: data.acciones || [],
        })
      )
      .catch((error) => console.error("Error:", error));

    fetch("http://localhost/archivos/depStock/obtenerMovimientos.php")
      .then((response) => response.json())
      .then((data) => setMovimientos(data.movimientos || []))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para resetear el formulario
  const resetForm = () => {
    setFormData({
      FechaMov: "",
      Cantidad: "",
      DescripUnidad: "",
      Unidad: "",
      Motivo: "",
    });
    setSelectedArticulo("");
    setSelectedCentro("");
    setSelectedAccion("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      IdConcepto: selectedArticulo,
      IdCentro: selectedCentro,
      IdAccion: selectedAccion,
    };

    fetch("http://localhost/archivos/depStock/guardarMovimientos.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // prueba, respuesta del servidor
        setModalIsOpen(false);
        resetForm(); // Resetear el formulario al guardar
        return fetch(
          "http://localhost/archivos/depStock/obtenerMovimientos.php"
        );
      })
      .then((response) => response.json())
      .then((data) => setMovimientos(data.movimientos || []))
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Error al guardar el movimiento.");
      });
  };

  const indexOfLastMovement = currentPage * rowsPerPage;
  const indexOfFirstMovement = indexOfLastMovement - rowsPerPage;
  const currentMovements = movimientos.slice(
    indexOfFirstMovement,
    indexOfLastMovement
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movimientos-container">
      <div className="movimientos-header">
        <h2>Movimientos Registrados</h2>
        <Button
          variant="primary"
          onClick={() => setModalIsOpen(true)}
          className="add-movement-btn"
        >
          Agregar Movimiento
        </Button>
      </div>

      <table className="movimientos-table">
        <thead>
          <tr>
            <th>Código</th>
            <th className="px-5">Fecha</th>
            <th>Artículo</th>
            <th>Centro</th>
            <th>Acción</th>
            <th>Cantidad</th>
            <th>Unidad</th>
            <th className="px-1">Descrip Unidad</th>
            <th>Motivo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentMovements.length > 0 ? (
            currentMovements.map((movimiento, index) => (
              <tr key={index}>
                <td>{movimiento.IdConcepto}</td>
                <td>{movimiento.FechaMov}</td>
                <td>{movimiento.Articulo}</td>
                <td>{movimiento.Centro}</td>
                <td>{movimiento.Accion}</td>
                <td>{movimiento.Cantidad}</td>
                <td>{movimiento.Unidad}</td>
                <td>{movimiento.DescripUnidad}</td>
                <td>{movimiento.Motivo}</td>
                <td>
                  <button
                    // onClick={() => handleEdit(movimiento)}
                    className="btn btn-link text-primary"
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    // onClick={() => handleDelete(movimiento.IdConcepto)}
                    className="btn btn-link text-danger ml-2"
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No hay movimientos registrados.</td>
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

      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Movimiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label>
                Fecha:
                <input
                  type="date"
                  name="FechaMov"
                  value={formData.FechaMov}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Acción:
                <select
                  value={selectedAccion}
                  onChange={(e) => setSelectedAccion(e.target.value)}
                  required
                >
                  <option value="">Seleccione una acción</option>
                  {data.acciones.map((accion) => (
                    <option key={accion.IdAccion} value={accion.IdAccion}>
                      {accion.Accion}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Artículo:
                <select
                  value={selectedArticulo}
                  onChange={(e) => setSelectedArticulo(e.target.value)}
                  required
                >
                  <option value="">Seleccione un artículo</option>
                  {data.articulos.map((articulo) => (
                    <option
                      key={articulo.IdConcepto}
                      value={articulo.IdConcepto}
                    >
                      {articulo.Articulo}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Centro:
                <select
                  value={selectedCentro}
                  onChange={(e) => setSelectedCentro(e.target.value)}
                  required
                >
                  <option value="">Seleccione un centro</option>
                  {data.centros.map((centro) => (
                    <option key={centro.IdCentro} value={centro.IdCentro}>
                      {centro.Centro}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group">
              <label>
                Cantidad:
                <input
                  type="number"
                  name="Cantidad"
                  value={formData.Cantidad}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                Motivo:
                <textarea
                  name="Motivo"
                  value={formData.Motivo}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </label>
            </div>

            <div className="form-group double">
              <label>
                Unidad:
                <input
                  type="text"
                  name="Unidad"
                  value={formData.Unidad}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="form-group double">
              <label>
                Descripción:
                <input
                  type="text"
                  name="DescripUnidad"
                  value={formData.DescripUnidad}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={() => {
                  setModalIsOpen(false);
                  resetForm();
                }}
              >
                Cancelar
              </button>
              <button type="submit">Guardar</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Movimiento;
