//34. el reducer contiene las functions que van a interactuar con el state, El reducer es una forma de manejar la lógica de actualización del estado de forma centralizada. En lugar de modificar directamente el estado, los componentes pueden enviar acciones al reducer. El reducer procesa la acción y devuelve el nuevo estado, que luego se actualiza en el Provider. el reducer toma dos parámetros un state y un action, en donde state es el estado inicial y el action es la function y el cambio de ese ese estado inicial a traves de la function.


//40.5 importamos los types 
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO} from '../../types'

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

        //60.5 generamos la acción para el type AGREGAR_PROYECTO, entonces primero generamos una copia del estado actual del proyecto para no modificar el original ...state  y luego le decimos que ahora el valor de proyectos es el valor de todos los proyectos que ya existen previos y ademas sumamos el payload que viene del state desde el dispatch para este type, este payload contiene el proyecto nuevo. de esta forma queda muy claro que el reducer genera cambios en los states iniciales y que ademas puede tomar los estados de otro type para operar, en este punto lo que hacemos es agregar el nuevo proyecto al estado proyectos.
        //60.6 luego le decimos a formulario que regrese a ser false para que de esta forma la opción de agregar un proyecto desaparezca tras agregar uno nuevo.
        //70.8 una vez que un proyecto a sido agregado sacamos la alerta de error cambiando el estado de errorFormulario 
        case AGREGAR_PROYECTO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorFormulario: false
            }
        
            
        //70.4 pasamos la acción para este type, retornamos una copia del state para que lo que halla en ese estado lo mantenga y luego le pasamos el cambio del estado inicial dado en el state, en un inicio estaba en false y tras correr esta function se pone en true. 
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorFormulario: true
            }
            default:
                return state
    }
}