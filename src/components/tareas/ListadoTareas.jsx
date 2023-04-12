import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';

//29 en este componente estarán las tareas de cada proyecto en especifico 
const ListadoTareas = () => {

    //90. importamos el context y le decimos que function vaa usar
    const proyectosContext = useContext(proyectoContext)
    
    //90.1 usando destructuring obtenemos los datos que queremos usar en el componente desde context. recordamos que proyecto hace referencia al proyecto actual y que su estado inicial es nul ya que al iniciar la pagina el proyecto no se ha seleccionado. aca lo que queremos hacer es usar este estado para renderizar o no el nombre del proyecto en el componente.
    //101.4 traemos la function eliminar proyecto al componente
    const { proyecto, eliminarProyecto } = proyectosContext

    //90.4 como estamos tratando de acceder a un proyecto en el siguiente paso usando el array destructuring, si no hay ningún proyecto va a saltar un error, para prevenir esto: 
    if(!proyecto) return <h2>Selecciona un proyecto</h2>
    
    //90.2 proyecto es null en su estado inicial pero si le damos click a un proyecto se activa la function que llena ese proyecto con el proyecto clickeado, este proyecto es un array por lo que queremos obtener sus valores usando array destructuring. 
    //101.5 usamos el array destructuring para sacar las propiedades de proyecto
    const [proyectoActual] = proyecto

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataforma de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ]
    return ( 
        <Fragment>

            {/* 90.5 aca ponemos el nombre del proyecto actual */}
            <h2>Proyecto : {proyectoActual.nombre}</h2>

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
                    //101.6 le damos a un onClick el valor de la function que elimina el proyecto actual y como argumento le damosel valor obtenido en el array destructuring.en este caso es proyecto = proyectoActual 
                    onClick={() => eliminarProyecto(proyectoActual)}
                >Eliminar proyecto &times;</button>
            </ul>

            
        </Fragment>
        
    );
}

export default ListadoTareas;