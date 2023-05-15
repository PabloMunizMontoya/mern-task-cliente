
import {REGISTRO_ERROR,REGISTRO_EXITOSO, OBTENER_USUARIO,LOGIN_ERROR,LOGIN_EXITOSO,CERRAR_SESSION} from "../../types"


export default (state, action) => {
    switch(action.type) {

        // si vamos a la api nos fijamos que el controlador para crear un nuevo usuario nos regresa el token, este mismo lo podemos pasar como payload, recordar que la function que llama a este type, llama a la api en la ruta de crear un nuevo usuario, esta ruta nos trae el token, asi que podemos usar el token y podemos guardarlo en el local storage, le decimos entonces que el elemento token tendrá el info del token dada por el controlador en la api 
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token )
            //retornamos una copia del state donde enviamos el nuevo valor de autenticado y el mensaje
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }

        case REGISTRO_ERROR:
            return{
                ...state,
                token: null,
                mensaje: action.payload
            }
        
        case LOGIN_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                mensaje: action.payload
            }

        default: 
            return state
    }
}