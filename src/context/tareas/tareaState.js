//109. aca definiremos el State y también las diferentes funciones con dispatch hacia los types.

import React, {useReducer} from 'react'
import TareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

//113. importamos los types
import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_NUEVA_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL} from '../../types'

//109.1 este es el estado inicial o todos los estados iniciales con los que vamos a trabajar o despachar.
const TareaState = props => {
    const initialState = {
        tareasProyecto: null,
        tareas: [
        {id:1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
        {id:2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
        {id:3, nombre: 'Elegir Plataforma de Pago', estado: false},
        {id:4, nombre: 'Elegir Hosting', estado: true, proyectoId: 3},
        {id:5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
        {id:6, nombre: 'Elegir Colores', estado: false, proyectoId: 3},
        {id:7, nombre: 'Elegir Plataforma de Pago', estado: false},
        {id:8, nombre: 'Elegir Hosting', estado: true, proyectoId: 1}
        ],
        //121. agregamos un state inicial para el error de la tarea nueva, lo usaremos para validar el formulario
        errorTarea: false,

        //134 tenemos que definir un state inicial para guardar la tarea que queremos editar
        tareaSeleccionada :null
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


    //117 creamos la function que agrega tareas al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //123. valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_NUEVA_TAREA
            
        })
    }

    //126. creamos la function que va a eliminar la tarea por su id 
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
        
    }

    //129 creamos la function para cambiar el estado de la tarea, este payload tarea viene del componente tarea, esta tarea es la tarea que corresponde al proyecto. 
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
        
    }

    //132 extraer una tarea para editarla
    const guardarTareaActual  = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea 
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

                //117.1 agregamos la function agregar tarea al provider
                agregarTarea,

                //116 pasamos el estado tareasProyecto al provider
                tareasProyecto: state.tareasProyecto,

                //121.1 pasamos el estado para el error de la tarea
                errorTarea: state.errorTarea,

                //123.1 pasamos la function que cambia el estado del erroTarea
                validarTarea,

                //126.1
                eliminarTarea,

                // 129.1 
                cambiarEstadoTarea,

                //132.1
                guardarTareaActual,

                //134.1 
                tareaSeleccionada: state.tareaSeleccionada

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )

}

export default TareaState