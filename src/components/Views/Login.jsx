import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ setUsuarioLogueado }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/archivos/depStock/loginReact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        // Guardamos el usuario en sessionStorage
        sessionStorage.setItem("user", JSON.stringify(data.usuario));
        sessionStorage.setItem("idusuario", data.idusuario);

        // Actualizamos el estado global
        setUsuarioLogueado(data.usuario);

        setSuccessMessage("Inicio de sesión exitoso. Redirigiendo...");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="logo-container">
          <img src="./src/assets/img/logo.png" alt="Gobierno de Tucumán" />
        </div>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese el usuario"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese la contraseña"
            required
          />
          <span className="eye-icon py-1" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
