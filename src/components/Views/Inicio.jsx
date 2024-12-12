import React from "react";
import MenuInicio from "./MenuInicio/MenuInicio";
import Movimiento from "./Movimientos/Movimiento";

const Inicio = ({ logout }) => {
  return (
    <div className="mainSection">
      <MenuInicio logout={logout} />
      {/* <h1>Bienvenido a la pagina prncipal :)</h1> */}
      <Movimiento></Movimiento>
    </div>
  );
};

export default Inicio;
