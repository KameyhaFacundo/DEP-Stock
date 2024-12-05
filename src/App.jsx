import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Login from "./components/Views/Login";
import { useState } from "react";

function App() {
  const usuarioEnLocalStorage =
    JSON.parse(sessionStorage.getItem("user")) || null;
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioEnLocalStorage);

  const logout = () => {
    sessionStorage.clear();
    setUsuarioLogueado(null);
  };

  return (
    <BrowserRouter>
      {usuarioLogueado && <Menu logout={logout} />}
      <Routes>
        <Route
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
      {usuarioLogueado && <Footer />}
    </BrowserRouter>
  );
}

export default App;
