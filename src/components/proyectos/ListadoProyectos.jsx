import React, { useContext, useEffect } from 'react'

//23.1 importamos el componente proyecto
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

//22. en este componente estarán todos los proyectos existentes
const ListadoProyectos = () => {

    
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    //Obtener proyectos cuando carga el componente 
    useEffect(() => {
        obtenerProyectos()
    }, [])
    
    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return null

    

    return ( 

        <ul className='listado-proyectos'>
            {/* 26 hacemos un map a proyectos para renderizarlos a todos, este map le dará las propiedades al componente Proyecto y estas propiedades luego se usaran en el componente, por ende si hay 5 proyectos harán 5 propiedades proyecto y 5 id */}
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