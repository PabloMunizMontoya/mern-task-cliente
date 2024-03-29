//35. aca definiremos el State y también las diferentes funciones con dispatch hacia los types.
import React, {useReducer} from 'react'

//35.1 importamos el context que creamos 
import proyectoContext from './proyectoContext'

//37 importamos el reducer
import proyectoReducer from './proyectoReducer'

//40.1 importamos los types
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS,AGREGAR_PROYECTO, PROYECTO_ERROR, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types'

import clienteAxios from '../../config/axios'


//36 este sera el state inicial de toda la admin del proyecto, como la eliminación o creación de un proyecto
const ProyectoState = props => {
    
    //50. ponemos el listado de proyectos dentro del state para poderlos usar dentro de todos los componentes en donde deseamos 
    /* const proyectos = [
        {id : 1, nombre: 'Tienda Virtual'},
        {id : 2, nombre: 'Intranet'},
        {id : 3, nombre: 'Diseño de sitio web'}
    ] */
    
    //36.1 este sera entonces el state inicial de los proyectos, formulario comienza en false y una vez que el usuario le de click al boton nuevo proyecto el valor formulario pasara a true y se mostrara en pantalla el formulario para poner la data.
    //52. nuestros proyectos inician como un array vació, por ende cuando mandemos a llamar el dispatch este array vació cambiara de estado en function de lo indicado por el reducer.
    //70.2 iniciamos una nueva pieza del state inicial para el error del formulario de nuevos proyectos.
    //80.1 definimos un nuevo state inicial para el proyecto actual
    const initialState = {
        proyectos : [],
        formulario : false,
        errorFormulario: false,
        proyecto: null,
        mensaje: null
        
    }
    
    //36.2 dispatch para ejecutar las acciones, el hook useReducer crea un estado y una function para actualizar el estado inicial. el primer argumento proyectoReducer es una function reducer que se utiliza para actualizar el estado, esta function esta en proyectoReducer esta function devuelve un nuevo estado basado en la acción que se ha realizado. el segundo argumento initialState es el estado inicial que se utiliza para inicializar el estado.
    //En resumen, este código crea un estado y una función para actualizar ese estado utilizando el hook useReducer. La función reducer proyectoReducer se utiliza para actualizar el estado basado en las acciones enviadas a través de la función dispatch. El estado inicial se establece en initialState.
    //el dispatch ejecuta los diferentes types
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //40.2 definimos la function que va a mostrar el formulario, aca deberíamos usar un payload si es que quisiéramos que el formulario tuviese info pero en este caso lo que queremos es que la function valla a types y a traves de esa referencia le indique al reducer que hacer con el estado del formulario que esta inicialmente como false. entonces despachamos type: FORMULARIO_PROYECTO y en el reductor le decimos que cambio hacer a este type que hace referencia al formulario. entonces el type que va a evaluar el switch (action.type) dentro del reductor es el que se le indica con el dispatch.
    const mostrarFormulario = () => {
        dispatch ({
            type: FORMULARIO_PROYECTO
        })
    }
    
    //54. obtener los proyectos es similar a la function de arriba hacemos un dispatch para que el reductor sepa a que tipo type hacer la action, La propiedad payload se utiliza para enviar datos adicionales junto con la acción. En este caso, proyectos es el valor que se está enviando como payload. Esto significa que la acción OBTENER_PROYECTOS puede utilizar estos datos para actualizar el estado del Context en consecuencia.

    /* const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
            
        })
    } */

    //obtener proyectos pero desde el backend
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos' )
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
                
            })
        } catch (error) {
            console.log(error)
        }
    }
    //agregar proyecto a la db, como trabajamos con axios usamos un proceso asíncrono usamos un try catch para manejar los errores y aciertos, en el try le damos una petición http post con la ruta definida en clienteAxios yen el backend para la librería de proyectos luego enviamos un dispatch con su type y por payload enviamos el resultado.
    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto)
            console.log(resultado)

            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    //70.1 validar el formulario por errores, creamos una function que va a manejar los errores, pasando un error de true a false
    const mostrarError = () => {
        dispatch ({
            type: VALIDAR_FORMULARIO
        })
    }

    // 80.3 selecciona el proyecto que el usuario dio click
    const proyectoActual = proyecto => {
        dispatch ({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    //101.1 creamos la function para eliminar el proyecto, en realidad creamos el dispatch que hace correr la function que elimina el proyecto, esta function tiene como argumento el proyecto actual y le pasamos por payload el valor de ese proyecto para que en el reducer trabajemos con el.
    /* const eliminarProyecto = proyecto => {
        dispatch ({
            type: ELIMINAR_PROYECTO,
            payload: proyecto
        })
    }  */

    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`)
            dispatch ({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch ({
                type: PROYECTO_ERROR,
                payload : alerta
            })
        }
    }

    //36.4 creamos el provider para que los estados y las functions se puedan usar en todo el proyecto
    return(
        <proyectoContext.Provider
            value={{

                /* 50.1 pasamos los proyectos dentro del provider para poder usarlos */
                proyectos: state.proyectos,

                /* 40.5 para poder usar el state del formulario lo ponemos dentro del provider */
                formulario: state.formulario,

                //70.3 pasamos el state errorFormulario hacia el provider
                errorFormulario: state.errorFormulario,

                //80.2 pasamos el estado proyecto a el provider
                proyecto : state.proyecto,

                mensaje: state.mensaje,

                /* 40.4 para poder ejecutar la function la debemos poner el el provider */
                mostrarFormulario,

                /* 56 pasamos la function al provider para asi poder usar esta function en todo el proyecto */
                obtenerProyectos,

                /* 60.2 pasamos la function al provider para asi poder usarla en nuestro proyecto */
                agregarProyecto,

                //70.4 pasamos la function para mostrar el error al provider.
                mostrarError,

                //80.4 pasamos la function al provider para seleccionar un proyecto actual
                proyectoActual,

                //101.2 pasamos la function para eliminar el proyecto
                eliminarProyecto
            }}
        >
            {/* 36.5 aca le decimos que los diferentes props dentro del provider pasen los datos a todos lso componentes */}
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState