import React, {Fragment} from 'react';
import Tarea from './Tarea';

//29 en este componente estarán las tareas de cada proyecto en especifico 
const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataforma de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ]
    return ( 
        <Fragment>
            <h2>Proyecto : Tienda Virtual</h2>

            <ul className='listado-tarea'>

                {/* 29.1 entonces en caso de que tareasProyecto sea igual a cero mostrar no hay tareas caso contrario mostrar el componente Tarea que es en donde estarán las tareas */}
                {tareasProyecto.length === 0
                    ? (<li className='tarea'><p>No hay tareas</p></li>)

                    /* 29.2 en caso de que si hallan tareas, hacemos un map y le otorgamos el valor de ese map como propiedades al componente Tarea */
                    : tareasProyecto.map (tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
                <button
                    type='button'
                    className='btn btn-eliminar'
                >Eliminar proyecto &times;</button>
            </ul>

            
        </Fragment>
        
    );
}

export default ListadoTareas;