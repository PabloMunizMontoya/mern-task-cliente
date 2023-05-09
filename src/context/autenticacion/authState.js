import React, { useReducer} from 'react'
import authContext from "./authContext"
import authReducer from "./authReducer"

import {REGISTRO_ERROR, OBTENER_USUARIO,LOGIN_ERROR,LOGIN_EXITOSO,CERRAR_SESSION} from "../../types"

const AuthState = props => {

    //definimos el estado inicial: token es el token que poníamos en el postman que ahora lo guardaremos en el localStorage. auth sera null al principio, usuario igual al igual que el mensaje.
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null 
    }
    
    const [state, dispatch] = useReducer(authReducer, initialState)


    return(
        <authContext.Provider
            value= {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >{props.children}

        </authContext.Provider>
    )
}

export default AuthState