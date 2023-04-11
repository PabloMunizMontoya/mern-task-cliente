import React from 'react'

//26 esta barra va a tener info de quien esta logueado, y un boton para cerrar session. 
const Barra = () => {
    return ( 
        <header className='app-header'>
            <p className='nombre-usuario'>Hola <span>Pablo</span></p>

            <nav className='nav-principal'>
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
     );
}
 
export default Barra;