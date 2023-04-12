//109. aca definiremos el State y también las diferentes funciones con dispatch hacia los types.

import React, {useReducer} from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

//113. importamos los types
import {TAREAS_PROYECTO} from '../../types'

//109.1 este es el estado inicial o todos los estados iniciales con los que vamos a trabajar o despachar.
const TareaState = props => {
    const initialState = {
        tareasProyecto: null,
        tareas: [
        {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
        {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
        {nombre: 'Elegir Plataforma de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true, proyectoId: 3},
        {nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
        {nombre: 'Elegir Colores', estado: false, proyectoId: 3},
        {nombre: 'Elegir Plataforma de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true, proyectoId: 1}
        ]
        
    }

    //109.2 con array destructuring creamos el state y el dispatch que vienen de el hook useReducer. useReducer es una function que toma dos parámetros,  el reducer y el state inicial.
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    //114. creamos una function para obtener las tareas de cada id correspondiente a su proyecto. esta function enviara un dispatch hacia el reducer que hace referencia al type y ademas lleva como payload las tareas para poder operar con ellas en el reducer. el valor del payload se obtiene al correr esta function en el componente proyecto 115 en donde se le pasa como argumento el id del proyecto (proyecto.id)
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId 
        })
        
    }


    //109.3 retornamos nuestro context con un provider para poder usar todos los valores en nuestro proyecto
    return (
        <TareaContext.Provider
            // 111. pasamos las tareas al provider para poder usarlas en todo el proyecto */}
            value= {{
                tareas:state.tareas,

                //114.1 pasamos la function obtener tareas al provider y de esta forma poder usarla en todo el proyecto
                obtenerTareas,

                //116 pasamos el estado tareasProyecto al provider
                tareasProyecto: state.tareasProyecto

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState