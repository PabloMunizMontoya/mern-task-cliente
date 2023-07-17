//108. el reducer contiene las functions que van a interactuar con el state, El reducer es una forma de manejar la lógica de actualización del estado de forma centralizada. En lugar de modificar directamente el estado, los componentes pueden enviar acciones al reducer. El reducer procesa la acción y devuelve el nuevo estado, que luego se actualiza en el Provider. el reducer toma dos parámetros un state y un action, en donde state es el estado inicial y el action es la function y el cambio de ese ese estado inicial a traves de la function.

//116 importamos los types con los que el reducer va a trabajar
import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_NUEVA_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_ACTUAL, ACTUALIZAR_TAREA} from '../../types'

//108.1 creamos los case para el reducer, este toma un estado y una action
export default (state,action) => {
    switch(action.type){

        //108.2 esta acción toma una copia del estado inicial tareas proyecto y lo completa con la nueva información dada por el filter: al estado tareas que contiene todas las tareas y viene desde el state se le itera buscando una propiedad en este caso el id y se compara su equivalencia con la información traída desde payload que en este caso es el id del proyecto seleccionado, entonces si tarea tiene proyectoId: 1 === proyectoId se llena la variable tareasProyecto.
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasProyecto: action.payload
            }

        //118. creamos la acción paa agregar tareas a el proyecto seleccionado: las tareas nuevas se agregan en el estado inicial tareas por que después se filtra por el id y se renderiza cada tarea para cada proyecto, pero este proceso se hace desde el estado tarea, por ende todas las tareas nuevas sin importar desde que proyecto se crean, se suman al estado tareas que tiene todas las tareas en general. entonces se hace una copia del estado, luego se hace en un array una copia de ese estado y se le suma la tarea que viene como payload para este type. 
        case AGREGAR_TAREA:
            return{
                ...state,
                tareasProyecto: [ action.payload,...state.tareasProyecto],
                //124.2 si el su usuario comete un error y en el formulario de tarea no pone nada y le da click al submit, error tarea quedaría en true y se mostraría la alerta correspondiente, ahora si el ususario pone un nombre a la tarea y la tarea se agrega deseamos sacar la alerta por esta razón ponemos aca otra vez errorTarea en su estado inicial
                errorTarea:false
            }

        //124 creamos la acción para mostrar el erro, esta acción cambia el state error tarea de su estado inicial false a true.
        case VALIDAR_NUEVA_TAREA:
            return{
                ...state,
                errorTarea:true
            }

        //127 generamos la acción para eliminar la tarea. como funciona este filter : si tenemos tarea con el id 1,2 y 3 y le damos a eliminar al uno  queremos que el filtro nos traiga el 2 y el 3 si fuese === nos traería nada mas el 1 
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareasProyecto: state.tareasProyecto.filter(tarea => tarea.id !== action.payload )
            }
            
        //131 creamos la acción para el estado de la tarea, como payload traemos la tarea que corresponde al id del proyecto, cada tarea tiene ademas un id propio entonces hacemos un map de las tareas del proyecto iterando cada tarea si la tarea.id === al aid del payload renderizamos el payload si no renderizamos la tarea que ya esta. esto es por que el estado ya esta cambiando en el componente tarea lo que aca queremos hacer es renderizar las tareas con su nuevo estado.
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return{
                ...state,
                tareasProyecto: state.tareasProyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea ),
                tareaSeleccionada:null
            }

        //133
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaSeleccionada: action.payload
            } 

        //138 

        default:
            return state
    }
}