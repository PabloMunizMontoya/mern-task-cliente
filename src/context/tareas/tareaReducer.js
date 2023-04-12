//108. el reducer contiene las functions que van a interactuar con el state, El reducer es una forma de manejar la lógica de actualización del estado de forma centralizada. En lugar de modificar directamente el estado, los componentes pueden enviar acciones al reducer. El reducer procesa la acción y devuelve el nuevo estado, que luego se actualiza en el Provider. el reducer toma dos parámetros un state y un action, en donde state es el estado inicial y el action es la function y el cambio de ese ese estado inicial a traves de la function.

//116 importamos los types con los que el reducer va a trabajar
import {TAREAS_PROYECTO, AGREGAR_TAREA} from '../../types'

//108.1 creamos los case para el reducer, este toma un estado y una action
export default (state,action) => {
    switch(action.type){

        //108.2 esta acción toma una copia del estado inicial tareas proyecto y lo completa con la nueva información dada por el filter: al estado tareas que contiene todas las tareas y viene desde el state se le itera buscando una propiedad en este caso el id y se compara su equivalencia con la información traída desde payload que en este caso es el id del proyecto seleccionado, entonces si tarea tiene proyectoId: 1 === proyectoId se llena la variable tareasProyecto.
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasProyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload )
            }

        //118. creamos la acción paa agregar tareas a el proyecto seleccionado: las tareas nuevas se agregan en el estado inicial tareas por que después se filtra por el id y se renderiza cada tarea para cada proyecto, pero este proceso se hace desde el estado tarea, por ende todas las tareas nuevas sin importar desde que proyecto se crean, se suman al estado tareas que tiene todas las tareas en general. entonces se hace una copia del estado, luego se hace en un array una copia de ese estado y se le suma la tarea que viene como payload para este type. 
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [...state.tareas, action.payload]
            }

        default:
            return state
    }
}