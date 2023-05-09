//176 state para alertas : aca creamos el estado inicial de la alerta y el dispatch para hacer el llamado al reducer usando el type, este dispatch también tendrá datos adicionales que se envían como payload con los que el reductor usara para modificar le estado inicial, para poder enviar estos datos se usa el alertasContext.Provider y se pasan las funciones y los estados iniciales como props del provider

import React, { useReducer} from 'react'
import alertasReducer from './alertasReducer'
import alertasContext from './alertasContext'

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types"

const AlertasState = props => {

    const initialState = {
        alerta: null
    }

    const [ state, dispatch] = useReducer(alertasReducer, initialState)

    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type : MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        })

        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, 5000)
    }
    return (
        <alertasContext.Provider
            value= {{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertasContext.Provider>
    )
}

export default AlertasState