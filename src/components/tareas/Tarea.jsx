import React, {useContext} from 'react'
import TareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';

//30. este componente va  a tener todas las tareas una a una separadas, la tarea en si viene del componente listadoDeTareas y se renderiza aca.

const Tarea = ({tarea}) => {

    //128 extraemos el context que queremos usar 
    const tareasContext = useContext(TareaContext)

    //128.1 extraemos lo que deseamos usar del context en el componente
    const {eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual} = tareasContext

    //130 le decimos que context usar 
    const proyectosContext = useContext(proyectoContext)

    //130.1 le decimos que datos usar del context aplicando destructuring, en este componente lo que queremos usar es la function que filtra el proyecto actual comparando por su id entre la lista de proyectos.
    const { proyecto } = proyectosContext
    console.log(proyecto[0]._id)
    //129 función que se ejecuta cuando el usuario aprieta el boton de eliminar tarea, esta function toma un id que es el id de la tarea a la que le damos click, en el on click le damos como propiedad a la function el id de la tarea aca le pasamos el id que es esa misma propiedad y a eliminar tarea le pasamos el id, luego necesitamos renderizar las tareas del proyecto activo, entonces obtenemos las tareas del proyecto actual que es el que esta en la posición cero del array de proyectos.
    const tareaEliminar = id => {
        eliminarTarea(id, proyecto[0]._id)
        obtenerTareas(proyecto[0].id)
    }

    //130 function que modifica el estado de la tarea 
    const CambiarEstado = tarea  => {
        if(tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea)
    }

    //132.3 agrega una tarea actual cuando el usuario desea editarla 
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea)
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
                        onClick={() => CambiarEstado(tarea)}
                    >Completo</button>
                    )
                
                :
                    (
                    <button
                        type='button'
                        className='incompleto'
                        onClick={() => CambiarEstado(tarea)}
                    >Incompleto</button>

                    )
                
                }
            </div>

            {/* 30.3 renderizamos dos botones por tarea para poder realizar algunas acciones.  */}
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-primario'
                    //132.3 function que se activa al dar click en editar
                    onClick={() =>seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    // como en este componente ya tenemos acceso a la tarea, le pasamos al clickear el boton de eliminar el id de dicha tarea.
                    onClick={() => tareaEliminar(tarea._id)}
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;