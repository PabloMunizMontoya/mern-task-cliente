//35. aca definiremos el State y también las diferentes funciones con dispatch hacia los types.
import React, {useReducer} from 'react'

//35.1 importamos el context que creamos 
import proyectoContext from './proyectoContext'

//37 importamos el reducer
import proyectoReducer from './proyectoReducer'

//40.1 importamos los types
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types'


//36 este sera el state inicial de toda la admin del proyecto, como la eliminación o creación de un proyecto
const ProyectoState = props => {
    
    //50. ponemos el listado de proyectos dentro del state para poderlos usar dentro de todos los componentes en donde deseamos 
    const proyectos = [
        {id : 1, nombre: 'Tienda Virtual'},
        {id : 2, nombre: 'Intranet'},
        {id : 3, nombre: 'Diseño de sitio web'}
    ]

    //36.1 este sera entonces el state inicial de los proyectos, formulario comienza en false y una vez que el usuario le de click al boton nuevo proyecto el valor formulario pasara a true y se mostrara en pantalla el formulario para poner la data.
    //52. nuestros proyectos inician como un array vació, por ende cuando mandemos a llamar el dispatch este array vació cambiara de estado en function de lo indicado por el reducer.
    const initialState = {
        proyectos : [],
        formulario : false
    }

    //36.2 dispatch para ejecutar las acciones, el hook useReducer crea un estado y una function para actualizar el estado inicial. el primer argumento proyectoReducer es una function reducer que se utiliza para actualizar el estado, esta function esta en proyectoReducer esta function devuelve un nuevo estado basado en la acción que se ha realizado. el segundo argumento initialState es el estado inicial que se utiliza para inicializar el estado.
    //En resumen, este código crea un estado y una función para actualizar ese estado utilizando el hook useReducer. La función reducer proyectoReducer se utiliza para actualizar el estado basado en las acciones enviadas a través de la función dispatch. El estado inicial se establece en initialState.
    //el dispatch ejecuta los diferentes types
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //36.3 Serie de funciones para el crud


    //40.2 definimos la function que va a mostrar el formulario, aca deberíamos usar un payload si es que quisiéramos que el formulario tuviese info pero en este caso lo que queremos es que la function valla a types y a traves de esa referencia le indique al reducer que hacer con el estado del formulario que esta inicialmente como false. entonces despachamos type: FORMULARIO_PROYECTO y en el reductor le decimos que cambio hacer a este type que hace referencia al formulario. entonces el type que va a evaluar el switch (action.type) dentro del reductor es el que se le indica con el dispatch.
    const mostrarFormulario = () => {
        dispatch ({
            type: FORMULARIO_PROYECTO
        })
    }

    //54. obtener los proyectos es similar a la function de arriba hacemos un dispatch para que el reductor sepa a que tipo type hacer la action, La propiedad payload se utiliza para enviar datos adicionales junto con la acción. En este caso, proyectos es el valor que se está enviando como payload. Esto significa que la acción OBTENER_PROYECTOS puede utilizar estos datos para actualizar el estado del Context en consecuencia.

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    
    //36.4 creamos el provider para que los estados y las functions se puedan usar en todo el proyecto
    return(
        <proyectoContext.Provider
            value={{

                /* 50.1 pasamos los proyectos dentro del provider para poder usarlos */
                proyectos: state.proyectos,

                /* 40.5 para poder usar el state del formulario lo ponemos dentro del provider */
                formulario: state.formulario,

                /* 40.4 para poder ejecutar la function la debemos poner el el provider */
                mostrarFormulario,

                /* 56 pasamos la function al provider para asi poder usar esta function en todo el proyecto */
                obtenerProyectos
            }}
        >
            {/* 36.5 aca le decimos que los diferentes props dentro del provider pasen los datos a todos lso componentes */}
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState