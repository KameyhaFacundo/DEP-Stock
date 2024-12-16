//Aqui se importaran las url que se ingresan en el archivo .env para comuinicarse con el back

//Por lo pronto defino funciones con controles hardcodeado 
export const login = async (user) => {
    try {
        const response = await fetch(
          "http://localhost/archivos/depStock/login.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: user.nombreUsuario,
              password: user.contrasenia,
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
        console.log(err)
        setError("Error al conectar con el servidor.");
      }
     /*
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
    }*/
}