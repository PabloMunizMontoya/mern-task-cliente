import React from 'react'

//30. este componente va  a tener todas las tareas una a una separadas, la tarea en si viene del componente listadoDeTareas y se renderiza aca.

const Tarea = ({tarea}) => {
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
                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;