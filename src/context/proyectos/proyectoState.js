//35. aca definiremos el State y también las diferentes funciones con dispatch hacia los types.
import React, {useReducer} from 'react'

//35.1 importamos el context que creamos 
import proyectoContext from './proyectoContext'


import proyectoReducer from './proyectoReducer'

import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types'


//36 este sera el state inicial de toda la admin del proyecto, como la eliminación o creación de un proyecto
const ProyectoState = props => {
    
    const proyectos = [
        {id : 1, nombre: 'Tienda Virtual'},
        {id : 2, nombre: 'Intranet'},
        {id : 3, nombre: 'Diseño de sitio web'}
    ]

    //36.1 este sera entonces el state inicial de los proyectos, formulario comienza en false y una vez que el usuario le de click al boton nuevo proyecto el valor formulario pasara a true y se mostrara en pantalla el formulario para poner la data.
    const initialState = {
        proyectos : [],
        formulario : false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el crud

    const mostrarFormulario = () => {
        dispatch ({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
           type: OBTENER_PROYECTOS,
           payload: proyectos
        })
    }
    
    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState