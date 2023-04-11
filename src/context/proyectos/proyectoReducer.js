//34. el reducer contiene las functions que van a interactuar con el state, El reducer es una forma de manejar la lógica de actualización del estado de forma centralizada. En lugar de modificar directamente el estado, los componentes pueden enviar acciones al reducer. El reducer procesa la acción y devuelve el nuevo estado, que luego se actualiza en el Provider. el reducer toma dos parámetros un state y un action, en donde state es el estado inicial y el action es la function y el cambio de ese ese estado inicial a traves de la function.



import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types'

//34.1 la function reducer toma dos argumentos el estado actual y la function que actualiza ese estado.
export default (state, action ) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }
        default: 
            return state
    }
}