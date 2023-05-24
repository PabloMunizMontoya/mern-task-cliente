import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/autenticacion/authContext';

//26 esta barra va a tener info de quien esta logueado, y un boton para cerrar session. 
const Barra = () => {

    // vamos a poner en el layout el nombre del usuario autenticado. Para eso usamos la function que le da a usuario el valor del usuario autenticado, y el estado usuario.
    const authContext = useContext(AuthContext)
    const {usuario,usuarioAutenticado} = authContext

    // usamos usuario autenticado que es la función que llama al type OBTENER_USUARIO que se encarga de darle a usuario el valor del usuario autenticado, entonces con un useEffect que se dispara al cargar proyectos llamamos a dicha function.
    useEffect(() => {
        usuarioAutenticado()
    },[])
    return ( 
        <header className='app-header'>
            {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.nombre}</span></p> : null}
            

            <nav className='nav-principal'>
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
     );
}
 
export default Barra;