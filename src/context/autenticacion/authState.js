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
            const respuesta = await clienteAxios.post('/api/usuarios', datos)
            console.log(respuesta.data)

            //hacemos un dispatch al type de registro exitoso, si miramos el objeto que trae respuesta, en respuesta.data tenemos el token, entonces ese dato es lo que necesitamos pasar como payload.
            dispatch({
                type: REGISTRO_EXITOSO,
                payload : respuesta.data
            })

            // obtenemos el usuario una vez que el registro es exitoso
            usuarioAutenticado()
            
        } catch (error) {
            //error.response es la forma de acceder a los errores en axios.
            //después debemos ver que parte del error necesitamos en este caso error.response.data.msg nos trae el mensaje de error que buscamos.
            //el valor de esta ruta lo definimos como el mensaje de la alerta.
            console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            //si hay un error se hace un dispatch al type de registro error
            // el error despacha un payload qeu es alerta esta variable le dimos valor arriba.
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token')
        if(token) {

        }

        try {
            const respuesta = await clienteAxios.get('/api/auth')
            console.log(respuesta)
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
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