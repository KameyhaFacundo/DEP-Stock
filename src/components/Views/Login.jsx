import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, useNavigate } from 'react-router-dom';

const Login = (usuarioLogueado, setUsuarioLogueado) => {
    const {register, formState:{errors}, reset} = useForm();
    const navigate = useNavigate();
    
    return (
        <div className='mainSection'>
            <Form>
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
                                value:10,
                                message:'El nombre de usuario debe contenero como maximo 10 caracteres.'
                            }
                        }
                    )}
                    />
                    <Form.Text className='text-danger'>
                        {errors.nombreUsuario?.message}
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Login;