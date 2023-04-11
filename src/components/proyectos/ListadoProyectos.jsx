import React, { useContext, useEffect } from 'react'

//23.1 importamos el componente proyecto
import Proyecto from './Proyecto';

//51. importamos el context para poder usar sus estados 
import proyectoContext from '../../context/proyectos/proyectoContext';

//22. en este componente estarán todos los proyectos existentes
const ListadoProyectos = () => {

    // 51.1 le decimos que context usa la function
    const proyectosContext = useContext(proyectoContext)

    // 51.2 le decimos que datos extraer del context aplicando destructuring. En este caso queremos los proyectos.
    //57 extraemos del context la function para poder extraer los proyectos.
    const { proyectos, obtenerProyectos } = proyectosContext

    //57.1 .Obtener proyectos cuando carga el componente. usamos el hook para traer los proyectos existentes desde context al cargar la pagina, por eso el array de dependencias que indica cuando activar el useEffect esta vació. entonces el componente carga y la function traída desde el context para obtener los proyectos se acciona.
    useEffect(() => {
        obtenerProyectos()
    }, [])
    
    // 51.3 revisar si proyectos tiene contenido
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