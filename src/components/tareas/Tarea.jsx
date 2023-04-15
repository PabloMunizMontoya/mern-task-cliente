import React, {useContext} from 'react'
import TareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

//30. este componente va  a tener todas las tareas una a una separadas, la tarea en si viene del componente listadoDeTareas y se renderiza aca.

const Tarea = ({tarea}) => {

    //128 extraemos el context que queremos usar 
    const tareasContext = useContext(TareaContext)

    //128.1 extraemos lo que deseamos usar del context en el componente
    const {eliminarTarea, obtenerTareas} = tareasContext

    //130 le decimos que context usar 
    const proyectosContext = useContext(proyectoContext)

    //130.1 le decimos que datos usar del context aplicando destructuring, en este componente lo que queremos usar es la function que filtra el proyecto actual comparando por su id entre la lista de proyectos.
    const {  proyecto } = proyectosContext

    //129 función que se ejecuta cuando el usuario aprieta el boton de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id)
        obtenerTareas(proyecto[0].id)
    }

    return ( 

        //30.1 usamos la prop tarea dad por el map en LIstadoTareas para mostrar en pantalla las propiedades de este objeto
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>

            {/* 30.2 si el estado de la tarea es true o false pasan cosas diferentes */}
            <div className='estado'>
                {tarea.estado
                ?   
                    (
                    <button
                        type='button'
                        className='completo'
                    >Completo</button>
                    )
                
                :
                    (
                    <button
                        type='button'
                        className='incompleto'
                    >Incompleto</button>
                    )
                
                }
            </div>

            {/* 30.3 renderizamos dos botones por tarea para poder realizar algunas acciones.  */}
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;