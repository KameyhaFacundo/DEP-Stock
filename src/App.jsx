import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Menu from "./components/common/Menu";
import Login from "./components/Views/Login";
import { useState } from "react";

function App() {
  const usuarioEnLocalStorage =
    JSON.parse(sessionStorage.getItem("user")) || null;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnLocalStorage);

  const logout = () => {
    sessionStorage.removeItem("user");
    setUsuarioLogueado(null);
  };

  return (
    <BrowserRouter>
      {usuarioLogueado && <Menu logout={logout} />}
      <Routes>
        {/* Si no está logueado, redirigimos siempre al Login */}
        <Route
          exact
          path="/"
          element={
            usuarioLogueado ? (
              <div className="content">
                <h1>Bienvenido al sistema</h1>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          element={
            usuarioLogueado ? (
              <Navigate to="/" />
            ) : (
              <Login setUsuarioLogueado={setUsuarioLogueado} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
