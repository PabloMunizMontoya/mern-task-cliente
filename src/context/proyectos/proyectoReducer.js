//34. el reducer contiene las functions que van a interactuar con el state, El reducer es una forma de manejar la lógica de actualización del estado de forma centralizada. En lugar de modificar directamente el estado, los componentes pueden enviar acciones al reducer. El reducer procesa la acción y devuelve el nuevo estado, que luego se actualiza en el Provider. el reducer toma dos parámetros un state y un action, en donde state es el estado inicial y el action es la function y el cambio de ese ese estado inicial a traves de la function.


//40.5 importamos los types 
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types'

//34.1 la function reducer toma dos argumentos el estado actual y la function que actualiza ese estado.
export default (state, action ) => {

    //40.5 el action .type hace referencia a que type vamos a operar, el type que va a ser cambiado viene del dispatch en el state
    switch(action.type) {

        //40.6 vamos a modificar entonces este type, usando una copia del estado para no modificar la original, esta copia hace esto lo que esta lo deja como esta, pero la variable formulario la cambie a true.
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true
            }
        
        //55. generamos la acción para OBTENER_PROYECTOS, entonces el valor de proyectos va a ser el payload, que son todos los proyectos.
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }
        default: 
            return state
    }
}