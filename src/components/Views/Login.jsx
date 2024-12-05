import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card, Navbar } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logoNavCardLogin from "../../assets/img/header-responsive-SM.png";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (usuario) => {
    try {
      const response = await fetch(
        "http://localhost/archivos/depStock/loginReact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usuario.nombreUsuario,
            password: usuario.contrasenia,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        sessionStorage.setItem("user", JSON.stringify(data.usuario));
        sessionStorage.setItem("idusuario", data.idusuario);
        setUsuarioLogueado(data.usuario);
        setSuccessMessage("Inicio de sesión exitoso. Redirigiendo...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card className="shadow" style={{ width: "22rem" }}>
        <Card.Header className="bg-white text-center">
          <Navbar.Brand
            as={Link}
            to={"/"}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src={logoNavCardLogin}
              alt="Direccion Estadistica de la provincia de Tucuman"
              className="w-75"
            />
          </Navbar.Brand>
        </Card.Header>
        <Card.Body>
          {error && <p className="text-danger">{error}</p>}
          {successMessage && <p className="text-success">{successMessage}</p>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese su nombre de usuario"
                {...register("nombreUsuario", {
                  required: "Debe ingresar un nombre de usuario.",
                  minLength: {
                    value: 4,
                    message:
                      "El nombre de usuario debe contener como mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 15,
                    message:
                      "El nombre de usuario debe contener como máximo 15 caracteres.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <div className="position-relative">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña"
                  {...register("contrasenia", {
                    required: "No se ingresó la contraseña.",
                    minLength: {
                      value: 4,
                      message:
                        "La contraseña debe tener como mínimo 4 caracteres.",
                    },
                    maxLength: {
                      value: 15,
                      message:
                        "La contraseña debe contener como máximo 15 caracteres.",
                    },
                  })}
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y pe-3"
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <Form.Text className="text-danger">
                {errors.contrasenia?.message}
              </Form.Text>
            </Form.Group>

            <Button className="w-100" variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
