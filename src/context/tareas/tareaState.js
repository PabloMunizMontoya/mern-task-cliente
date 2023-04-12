//109. aca definiremos el State y también las diferentes funciones con dispatch hacia los types.

import React, {useReducer} from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

//109.1 este es el estado inicial o todos los estados iniciales con los que vamos a trabajar o despachar.
const TareaState = props => {
    const initialState = {
        tareas: [
        {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
        {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
        {nombre: 'Elegir Plataforma de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true, proyectoId: 3},
        {nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
        {nombre: 'Elegir Colores', estado: false, proyectoId: 3},
        {nombre: 'Elegir Plataforma de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true, proyectoId: 1}
        ],
    }

    //109.2 con array destructuring creamos el state y el dispatch que vienen de el hook useReducer. useReducer es una function que toma dos parámetros,  el reducer y el state inicial.
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    //109.3 retornamos nuestro context con un provider para poder usar todos los valores en nuestro proyecto
    return (
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState