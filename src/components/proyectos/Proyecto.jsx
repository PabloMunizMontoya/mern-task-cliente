import React, {useContext} from 'react'

import proyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

//23 en este componente estarán cada uno de los proyectos.
//25 como props le pasamos un proyecto que viene desde el componente listadoDeProyectos.
const Proyecto = ({proyecto}) => {

    //80.6 le decimos que context usar 
    const proyectosContext = useContext(proyectoContext)

    //80.7 le decimos que datos usar del context aplicando destructuring, en este componente lo que queremos usar es la function que filtra el proyecto actual comparando por su id entre la lista de proyectos.
    const {  proyectoActual  } = proyectosContext

    //115.2 extraemos el context que queremos usar 
    const tareasContext = useContext(TareaContext)
    //115.3 extraemos lo que deseamos usar del context en el componente 
    const {obtenerTareas} = tareasContext

    
    //115. agregamos function para agregar el proyecto actual y sus tareas, esta function dispara las function que traemos desde los diferentes context, y como argumento traemos proyecto, recordemos que proyecto ya viene con la info de los proyectos dada por el useEffect en el componente listado de proyectos que dispara la function que carga los proyectos con su respectiva información. por eso el argumento aca es proyecto para poder usar ese objeto tomar su información y usarla en el reducer para hacer lo que deseamos.
    const seleccionarProyecto = proyecto => {
        proyectoActual(proyecto)
        obtenerTareas(proyecto._id)
    
    }

    return ( 
        <li>
            {/* 24. cada proyecto va a tener un boton  */}
            <button
                type='button'
                className='btn btn-blank'

                //115.1 agregamos un onClick que activa la function que corre las funciones que trajimos desde context
                onClick= {() => seleccionarProyecto(proyecto)}
            >{proyecto.nombre}</button>
        </li>
    );
}

export default Proyecto;