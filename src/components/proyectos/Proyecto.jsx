import React, {useContext} from 'react'

import proyectoContext from '../../context/proyectos/proyectoContext';

//23 en este componente estarán cada uno de los proyectos.
//25 como props le pasamos un proyecto que viene desde el componente listadoDeProyectos.
const Proyecto = ({proyecto}) => {

    //80.6 le decimos que context usar 
    const proyectosContext = useContext(proyectoContext)

    //80.7 le decimos que datos usar del context aplicando destructuring, en este componente lo que queremos usar es la function que filtra el proyecto actual comparando por su id entre la lista de proyectos.
    const {  proyectoActual } = proyectosContext

    return ( 
        <li>
            {/* 24. cada proyecto va a tener un boton  */}
            <button
                type='button'
                className='btn btn-blank'

                //80.9 agregamos un onClick que activa la function que ingresamos desde context
                onClick= {() => proyectoActual(proyecto)}
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;