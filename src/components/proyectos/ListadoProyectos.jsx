import React, { useContext } from 'react'
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //obtenemos el state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { proyectos } = proyectosContext
    

    return ( 

        <ul className='listado-proyectos'>
            {proyectos.map(proyecto => (
                <Proyecto
                    key = {proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;