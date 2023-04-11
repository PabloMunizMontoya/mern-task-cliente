import React from 'react'

//23 en este componente estarán cada uno de los proyectos.
//25 como props le pasamos un proyecto que viene desde el componente listadoDeProyectos.
const Proyecto = ({proyecto}) => {


    return ( 
        <li>
            {/* 24. cada proyecto va a tener un boton  */}
            <button
                type='button'
                className='btn btn-blank'
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;