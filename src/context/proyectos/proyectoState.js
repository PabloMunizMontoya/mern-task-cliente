import React from 'react'

import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'

const ProyectoState = props => {
    const initialState = {
        formulario : false 
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el crud
    
    return(
        <proyectoContext.provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.provider>
    )
}

export default ProyectoState