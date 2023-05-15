import React, { useReducer} from 'react'
import authContext from "./authContext"
import authReducer from "./authReducer"
import clienteAxios from "../../config/axios"

import {REGISTRO_ERROR, OBTENER_USUARIO,LOGIN_ERROR,LOGIN_EXITOSO,CERRAR_SESSION, REGISTRO_EXITOSO} from "../../types"

const AuthState = props => {

    //definimos el estado inicial: token es el token que poníamos en el postman que ahora lo guardaremos en el localStorage. auth sera null al principio, usuario igual al igual que el mensaje.
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null 
    }
    
    const [state, dispatch] = useReducer(authReducer, initialState)

    // esta function se va a conectar con el backend, tiene como prop los datos que le vamos a pasar a la api, estos datos vienen de el componente nuevaCuenta y son los datos ingresados por el usuario al crear una nuevo usuario.
    const registrarUsuario = async datos => {

        
        try {

            //recordemos que cliente axios tiene la url a la que se le hace la petición y los datos son lo que le vamos a enviar a la api mediante a la ruta
            const respuesta = await clienteAxios.post('/api/usuario', datos)
            console.log(respuesta)

            //hacemos un dispatch al type de registro exitoso
            dispatch({
                type: REGISTRO_EXITOSO
            })
        } catch (error) {
            console.log(error)

            //si hay un error se hace un dispatch al type de registro error
            dispatch({
                type: REGISTRO_ERROR
            })
        }
    }

    return(
        <authContext.Provider
            value= {{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario

            }}
        >{props.children}

        </authContext.Provider>
    )
}

export default AuthState