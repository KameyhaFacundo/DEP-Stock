import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Navbar } from 'react-bootstrap';
import logoNavCardLogin from '../../assets/img/header-responsive-SM.png';
import { login } from '../helpers/queries';
import Swal from 'sweetalert2';

const Login = ({setUsuarioLogueado}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (usuario) => {
        login(usuario).then(respuesta =>
        {
            if(respuesta && respuesta.status === 200)
            {
                delete respuesta.status;
                sessionStorage.setItem('user', JSON.stringify(respuesta.datos));
                console.log(respuesta);
                setUsuarioLogueado(JSON.stringify(respuesta.datos));
                Swal.fire('Bienvenido',':)','success');
                navigate('/home/'); //Aqui debe ir /home
            }else
            {
                Swal.fire('Error', 'Email o password incorrectos.', 'error');
            }
        }
        )
    }

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
