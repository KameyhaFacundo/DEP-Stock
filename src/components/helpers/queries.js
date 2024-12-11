//Aqui se importaran las url que se ingresan en el archivo .env para comuinicarse con el back

//Por lo pronto defino funciones con controles hardcodeado 
export const login = async (user) => {
    try
    {
        console.log(user);
        if(user.nombreUsuario==='admin' && user.contrasenia==='admin')
        {
            return {
                status: 200,
                mensaje: 'Usuario encontrado',
                type: 'user',
                datos: user,
                uid: 1
            }
        }else
        {
            return 400; //Error de usuario no encontrado
        }
    }catch(error)
    {
        console.log('A ocurrido un error: '+error);
        return null;
    }
}