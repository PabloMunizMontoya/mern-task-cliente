import React, { useReducer} from 'react'
import authContext from "./authContext"
import authReducer from "./authReducer"
import clienteAxios from "../../config/axios"

//importamos el token para poder usarlo
import tokenAuth from '../../config/tokenAuth'

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
            
            setTimeout(() => {
                usuarioAutenticado(); 
            }, 1000); 
            
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
        //leemos el token que tenemos guardado en el local storage y lo traemos
        const token =  localStorage.getItem('token')
        //con un condicional si token es true le damos a authToken ese valor para asignar el token a clienteAxios
        if(token) {
            tokenAuth(token)
        }

        try {
            //traemos de la api la info con la petición get
            const respuesta = await clienteAxios.get('/api/auth')
            // una vez que tenemos el usuario autenticado le pasamos ese valor por payload.
            dispatch({
                type: OBTENER_USUARIO,
                payload:respuesta.data.usuario
            })
            
        } catch (error) {
            // en esta instancia como no tenemos el token pasa al error y nos muestra el error definido en el middleware auth para cuando no hay un token, para solucionar esto creamos en config un archivos que nos envía el token desde el header para poder usarlo en toda la app. entonces le enviamos a clienteAxios el token.
            console.log(error.response)
            // en caso de que no se pueda autenticar, despachamos una acción al type.
            dispatch({
                
                type: LOGIN_ERROR
            })
        } 
        
    }
    // función para iniciar session, le vamos a pasar a la api los datos 
    const iniciarSesion = async datos => {
        const token =  localStorage.getItem('token')
        console.log(token)
        //con un condicional si token es true le damos a authToken ese valor para asignar el token a clienteAxios
        if(token) {
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos)
            
            console.log(respuesta.data)
            //en caso de que los datos sean correcto al iniciar Sesion largamos un dispatch
            dispatch({
                type: LOGIN_EXITOSO,
                //este payload viene desde el auth controller, y es el token que enviamos cuando el usuario se conecta de forma correcta. respuesta es la variable que definimos unas lineas arriba y en data.token esta lo que le enviamos desde el controlador que es el token.
                payload: respuesta.data
            })

            //obtenemos el usuario autenticado una vez que el login es exitoso 
            
            setTimeout(() => {
                usuarioAutenticado(); 
            }, 1000); 
            

        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                //los mensajes vienen desde el controlador authController
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            //si hay un error se hace un dispatch al type de registro error
            // el error despacha un payload que es alerta esta variable le dimos valor arriba.
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
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
                registrarUsuario,
                iniciarSesion
                

            }}
        >{props.children}

        </authContext.Provider>
    )
}

export default AuthState