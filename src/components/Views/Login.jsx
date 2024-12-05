import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Navbar } from 'react-bootstrap';
import logoNavCardLogin from '../../assets/img/header-responsive-SM.png';
import { login } from '../helpers/queries';
import Swal from 'sweetalert2';

const Login = ({usuarioLogueado, setUsuarioLogueado}) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();

    const onSubmit = (usuario) => {
        login(usuario).then(respuesta =>
        {
            if(respuesta.status === 200)
            {
                delete respuesta.status;
                sessionStorage.setItem('user', JSON.stringify(respuesta.datos));
                console.log(respuesta);
                setUsuarioLogueado(JSON.stringify(respuesta.datos));
                Swal.fire('Bienvenido',':)','success');
                navigate('/'); //Aqui debe ir /home
            }else
            {
                Swal.fire('Error', 'Email o password incorrectos.', 'error');
            }
        }
        )
    }
    
    return (
        <div className='mainSection'>
            <div className='d-flex justify-content-center align-items-center bg-light aw-100'>
                <Card className='my-2' style={{width: '22rem'}}>
                    <Card.Header>
                            <Navbar.Brand as={Link} to={'/'} className='d-flex justify-content-center align-items-center d-sm-block'>
                                <img src={logoNavCardLogin} alt='Direccion Estadistica de la provincia de Tucuman' className='w-100 my-1'></img>
                            </Navbar.Brand>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className='mb-3' controlId='formBasicUserName'>
                                <Form.Control 
                                type="text"
                                placeholder="Ingrese su nombre de usuario"
                                {...register('nombreUsuario',
                                    {
                                        required: 'Debe ingresar un nombre de usuario.',
                                        minLength:{
                                            value:4,
                                            message:'El nombre de usuario debe contener como minimo 4 caracteres.'
                                        },
                                        maxLength:{
                                            value:15,
                                            message:'El nombre de usuario debe contener como maximo 15 caracteres.'
                                        }
                                    }
                                )}
                                />
                                <Form.Text className='text-danger'>
                                    {errors.nombreUsuario?.message}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                <Form.Control 
                                    type='password'
                                    placeholder='Ingrese su contraseña'
                                    {...register('contrasenia',
                                        {
                                            required: 'No se ingreso la contraseña.',
                                            minLength:{
                                                value: 4,
                                                message:'La contraseña debe tener como minimo 4 caracteres.'
                                            },
                                            maxLength:{
                                                value: 15,
                                                message: 'La contraseña debe contener como maximo 15 caracteres.'
                                            }
                                        }
                                    )}
                                />
                                <Form.Text className='text-danger'>
                                    {errors.contrasenia?.message}
                                </Form.Text>
                            </Form.Group>
                            <div className='w-100'>
                                <Button className='me-2 w-100' variant='primary' type='submit'>
                                    Iniciar Seción.
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    );
};

export default Login;